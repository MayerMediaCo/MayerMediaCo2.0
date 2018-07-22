import React from 'react'

import Layout from '../components/layout/layout'

import ContactForm from '../components/contact-form/contact-form'

const StartYourProject = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content">
          <div className='has-text-centered'>
            <h1 className='title'>Start Your Project</h1>
            <h3 className='subtitle'>
              Tell me about what you would like to accomplish with your brand.
            </h3>
          </div>

          <hr className='border'/>
          <ContactForm/>
        </div>
      </section>
    </div>
  </Layout>
)

export default StartYourProject