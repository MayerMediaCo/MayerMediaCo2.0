import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"

class EmailCaptureForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``
    }
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({email: e.target.value})
  }

  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes).then(result => {
      // Mailchimp always returns a 200 response So we check the result for MC errors
      // & failures
      if (result.result !== `success`) {
        this.setState({status: `error`, msg: result.msg})
      } else {
        // Email address succesfully subcribed to Mailchimp
        this.setState({status: `success`, msg: result.msg})
      }
    }).catch(err => {
      // Network failures, timeouts, etc
      this.setState({status: `error`, msg: err})
    })
  }

  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    this.setState({
      status: `sending`,
      msg: null
    },
    // setState callback (subscribe email to MC)
    this._postEmailToMailchimp(this.state.email, {pathname: document.location.pathname}))
  }

  render() {
    const {signupMessage, confirmMessage} = this.props

    return (
      <div>
        {this.state.status === `success`
          ? (
            <div>{confirmMessage}</div>
          )
          : (
            <div>
              <p>{signupMessage}</p>

              <form id="email-capture" method="post" noValidate>
                <div>

                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className='input is-medium'
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        onChange={this._handleEmailChange}/>
                    </div>
                    <div className="control">
                      <button
                        type="submit"
                        onClick={this._handleFormSubmit}
                        className='button is-medium'>
                        Subscribe
                      </button>
                    </div>
                  </div>

                  {this.state.status === `error` && (<div
                    dangerouslySetInnerHTML={{
                    __html: this.state.msg
                  }}/>)}
                </div>
              </form>

            </div>
          )}
      </div>
    )
  }
}

EmailCaptureForm.defaultProps = {
  signupMessage: "Sign up for the email list to keep up with the latest blog posts!",
  confirmMessage: "Thank you for subscribing for email updates"
}

export default EmailCaptureForm