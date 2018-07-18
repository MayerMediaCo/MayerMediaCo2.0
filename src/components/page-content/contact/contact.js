import React from 'react'

import ContactForm from '../../contact-form/contact-form'

import './styles.css'

const contact = () => (
  <div className='container'>
    <div className='message'>
      <h1>Get in touch</h1>
      <p>
        Tell me about what you would like to accomplish with your brand.
      </p>
    </div>
    <hr className='border' />
    <ContactForm />
  </div>
)

export default contact
