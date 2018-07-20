import React from 'react'

import './styles.sass'

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

      <span className="control">
        <input className="input" type="text" placeholder="First Name"/>
      </span>
      <span className="control">
        <input className="input" type="text" placeholder="Last Name"/>
      </span>

      <span className="control">
        <input className="input" type="email" placeholder="Email"/>
      </span>
      <span className="control">
        <input className="input" type="text" placeholder="Phone"/>
      </span>

        <span className="control">
          <input className="input" type="text" placeholder="Website"/>
        </span>
        <span className="control">
          <input className="input" type="text" placeholder="Company"/>
        </span>

        <span className="control">
          <textarea className="textarea" placeholder="Tell me about your project" rows="10"/>
        </span>
      <span className='control'>
      <input className='submit-button' type="submit" value="Submit"/>
      </span>
    </form>
)

export default ContactForm