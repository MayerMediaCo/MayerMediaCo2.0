import React from 'react'

import Layout from '../components/layout/layout'

import ContactForm from '../components/contact-form/contact-form'

const contact = () => (
  <Layout>
    <div className='container'>
      <div className='message'>
        <h1>Get in touch</h1>
        <p>
          Tell me about what you would like to accomplish with your brand.
        </p>
      </div>
      <hr className='border'/>
      <ContactForm/>
    </div>
  </Layout>
)

export default contact