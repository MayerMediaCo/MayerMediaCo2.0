import React from 'react'

import Layout from '../components/layout/layout'
import CallToAction from '../components/call-to-action/call-to-action'
import GSNButton from '../components/buttons/get-started-now'
import EmailButton from '../components/buttons/email-button'

const contact = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <div className='has-text-centered'>
            <h1 className='title'>Get In Touch</h1>
            <p>
              There are tons of ways to connect with me all over the internet
            </p>
            <hr className="border"/>
          </div>
        </div>
      </section>
      <section className="section">

        <h3 className="contact-project has-text-centered">
          Send me an E-Mail or Start Your Project</h3>
        <div className="columns">
          <div className="column">
            <p className='contact-project has-text-centered'>
              <i className="contact-icon bx bx-envelope bx-border-circle"></i>
              Email</p>
          </div>
          <div className="column">
            <p className='contact-project has-text-centered'>
              <i className="contact-icon bx bx-report bx-border-circle"></i>Looking For A Quote?</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <EmailButton/>
          </div>
          <div className="column">
            <GSNButton/>
          </div>
        </div>

        <div className="social-contact">
          <h3 className="contact-project has-text-centered">
            Get Connected on Social Media</h3>
          <div className="columns is-desktop">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <a
                    href='https://twitter.com/MayerMediaCo'
                    className='card-header-title is-centered'>
                    <h3>Twitter</h3>
                    <hr className="border"/>
                    <i className="contact-icon  card-header-icon bx bxl-twitter bx-border-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <a
                    href='https://www.instagram.com/mayermediaco/'
                    className='card-header-title is-centered'>
                    <h3>Instagram</h3>
                    <hr className="border"/>
                    <i className="contact-icon card-header-icon bx bxl-instagram bx-border-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <a
                    href='https://github.com/MayerMediaCo'
                    className='card-header-title is-centered'>
                    <h3>Github</h3>
                    <hr className="border"/>
                    <i className="contact-icon card-header-icon bx bxl-github bx-border-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <a
                    href='https://www.facebook.com/mayermediaco/'
                    className='card-header-title is-centered'>
                    <h3>Facebook</h3>
                    <hr className="border"/>
                    <i className="contact-icon card-header-icon bx bxl-facebook bx-border-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    < CallToAction/>
  </Layout>
)

export default contact