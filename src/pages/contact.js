import React from 'react'

import Layout from '../components/layout/layout'

import ContactForm from '../components/contact-form/contact-form'

const contact = () => (
  <Layout>
    <div className='container'>
      <div className='has-text-centered'>
        <h1 className='title'>Get in touch</h1>
        <h3 className='subtitle'>
          Tell me about what you would like to accomplish with your brand.
        </h3>
      </div>

      <hr className='border'/>
      <ContactForm/>
    </div>
  </Layout>
)

export default contact