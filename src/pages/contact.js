import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'
import CallToAction from '../components/call-to-action/call-to-action'
import GSNButton from '../components/buttons/get-started-now'

const contact = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content">
          <div className='has-text-centered'>
            <h1 className='title'>Get In Touch</h1>
            <h3 className='subtitle'>
              There are tons of ways to connect with me all over the place
            </h3>
            <hr className="border"/>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="email-contact">
          <h3 className="contact-project has-text-centered">
            Send me an E-Mail or Start Your Project</h3>
          <div className="columns">
            <div className="column">
              <h3 className='contact-project has-text-centered'>
                <i className="bx bx-envelope bx-border-circle"></i>
                Email</h3>
              <div className='has-text-centered'>
                <a
                  className='button is-medium is-rounded'
                  href={`mailto:mayermediaco@gmail.com`}>mayermediaco@gmail.com</a>
              </div>
            </div>
            <div className="column">
              <h3 className='contact-project has-text-centered'>Looking For A Quote?</h3>
              <GSNButton/>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="social-contact">
          <h3 className="contact-project has-text-centered">
            Get Connected on Social Media</h3>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <Link to='#' className='card-header-title is-centered'>
                    <h3>Twitter</h3>
                    <hr className="border"/>
                    <i className="card-header-icon bx bxl-twitter bx-border-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <Link to='#' className='card-header-title is-centered'>
                    <h3>Instagram</h3>
                    <hr className="border"/>
                    <i className="card-header-icon bx bxl-instagram bx-border-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <Link to='#' className='card-header-title is-centered'>
                    <h3>Github</h3>
                    <hr className="border"/>
                    <i className="card-header-icon bx bxl-github bx-border-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <Link to='#' className='card-header-title is-centered'>
                    <h3>Facebook</h3>
                    <hr className="border"/>
                    <i className="card-header-icon bx bxl-facebook bx-border-circle"></i>
                  </Link>
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