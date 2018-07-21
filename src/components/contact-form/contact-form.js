import React from 'react'

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field">

    <input type="hidden" name="form-name" value="contact"/>
    <p hidden>
      <label>
        Don’t fill this out:{" "}
        <input name="bot-field"/>
      </label>
    </p>

    <div className="field is-horizontal">
      <div className="field is-expanded column">
        <div className="control has-icons-left">
          <input type="text" className="input" placeholder='Name'/>
          <span className='icon is-medium is-left'>
            <i className="bx bx-user"></i>
          </span>
        </div>
      </div>
      <div className="field is-expanded column">
        <div className="control has-icons-left">
          <input type="text" className="input" placeholder='Phone Number'/>
          <span className='icon is-medium is-left'>
            <i className="bx bx-phone"></i>
          </span>
        </div>
      </div>
    </div>

    <div className="field is-horizontal">
      <div className="field is-expanded column">
        <div className="control has-icons-left">
          <input type="email" className="input" placeholder='E-Mail Address'/>
          <span className='icon is-medium is-left'>
            <i className="bx bx-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field is-expanded column">
        <div className="control has-icons-left">
          <input type="email" className="input" placeholder='Company / Organization'/>
          <span className='icon is-medium is-left'>
            <i className="bx bx-building"></i>
          </span>
        </div>
      </div>
    </div>

    <div className="field is-expanded column">
      <div className="control">
        <textarea
          className='textarea'
          placeholder='What are you trying to accomplish?'
          rows="10"></textarea>
      </div>
    </div>

    <div className="field column">
      <div className="control">
        <input type="submit" value="Submit" className="button form-button"/>
      </div>
    </div>

  </form>
)

export default ContactForm