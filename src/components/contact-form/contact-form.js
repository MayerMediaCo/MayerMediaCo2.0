import React from "react";
import {navigateTo} from "gatsby-link";

function encode(data) {
  return Object
    .keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    }).then(() => navigateTo(form.getAttribute("action"))).catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}>

        <input type="hidden" name="form-name" value="contact"/>
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange}/>
          </label>
        </p>

        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className="input"
              placeholder='Name'
              name="name"
              required
              onChange={this.handleChange}/>
            <span className='icon is-medium is-left'>
              <i className="bx bx-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Phone Number</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className="input"
              placeholder='Phone Number'
              name="phone number"
              onChange={this.handleChange}/>
            <span className='icon is-medium is-left'>
              <i className="bx bx-phone"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              type="email"
              className="input"
              placeholder='E-Mail Address'
              name="email address"
              required
              onChange={this.handleChange}/>
            <span className='icon is-medium is-left'>
              <i className="bx bx-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Company / Organization</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className="input"
              placeholder='Company / Organization'
              name="business"
              onChange={this.handleChange}/>
            <span className='icon is-medium is-left'>
              <i className="bx bx-building"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Website URL</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className="input"
              placeholder='Website URL'
              name="website"
              onChange={this.handleChange}/>
            <span className='icon is-medium is-left'>
              <i className="bx bx-laptop"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">What are you trying to accomplish?</label>
          <div className="control">
            <textarea
              name="project details"
              onChange={this.handleChange}
              className='textarea'
              required
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
    );
  }
}