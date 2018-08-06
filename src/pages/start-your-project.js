import React from 'react'

import Layout from '../components/layout/layout'

import ContactForm from '../components/contact-form/contact-form'

const StartYourProject = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <div className='has-text-centered'>
            <h1 className='title'>Start Your Project</h1>
            <p className='subtitle'>
              Tell me about what you would like to accomplish with your brand.
            </p>
          </div>
          <hr className='border'/>
        </div>
      </section>

      <section className="section">
        <div className="column is-three-fifths is-offset-one-fifth">
          <ContactForm/>
        </div>
      </section>
    </div>
  </Layout>
)

export default StartYourProject