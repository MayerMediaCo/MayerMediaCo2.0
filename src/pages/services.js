import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'
import CallToAction from '../components/call-to-action/call-to-action'
import GSNButton from '../components/buttons/get-started-now'

const services = () => (
  <Layout>
    <div className="container">
      <section className='section'>
        <div className="content page-introduction">
          <h1 className='has-text-centered title'>What is your brand saying about you?</h1>
          <p>Your brand and online presence are a direct reflection of you and your
            business. The further we look across the digital landscape, the more complex it
            becomes. A consistent look, feel, and tone in all of your digital assets is
            essential to reach your customers effectively and let them know what you are all
            about.</p>
          <p className='has-text-centered is-size-5'>Already Know what you need?</p>
          <GSNButton/>
        </div>
      </section>

      <hr className="border"/>

      <section className="section">
        <div className='columns is-desktop'>
          <div className="card column is-full-tablet is-half-desktop">
            <div className="card-header">
              <Link to='/services/design' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bxs-layout bx-border-circle"></i>
                  Design</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Create the best representation of your brand, optimize marketing and print
                materials or give your website a fresh new look.</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Branding</li>
                    <li>Logos</li>
                    <li>Print</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>User Interface / User Experience</li>
                    <li>Advertising / Promotional</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/design' className='bx-fade-right-hover'>Find Out More
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </footer>
          </div>
          <div className="card column is-full-tablet is-half-desktop">
            <div className="card-header">
              <Link to='/services/development' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-code-curly bx-border-circle"></i>
                  Development</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>From basic static sites to complex, data rich applications, utilize custom,
                mobile friendly solutions to present your brand online.</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Front-End</li>
                    <li>Wordpress</li>
                    <li>Applications</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>E-Commerce</li>
                    <li>Back-End and Integrations</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/development' className='bx-fade-right-hover'>Find Out More
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </footer>
          </div>
        </div>
        <br/>
        <div className='columns is-desktop'>
          <div className="card column is-full-tablet is-half-desktop">
            <div className="card-header">
              <Link to='/services/marketing' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-trending-up bx-border-circle"></i>
                  Marketing</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Get your brand and message heard utilizing modern content, social media,
                pay-per-click, and search engine marketing techniques. Craft a strategy to help
                you win.</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Social Media Management</li>
                    <li>Content Marketing and Management</li>
                    <li>E-Mail Marketing</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Search Engine Optimization</li>
                    <li>Pay-Per-Click Advertising</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/marketing' className='bx-fade-right-hover'>Find Out More
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </footer>
          </div>
          <div className="card column is-full-tablet is-half-desktop">
            <div className="card-header">
              <Link
                to='/services/research-and-analytics'
                className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-globe bx-border-circle"></i>
                  Research and Analytics</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Make sense of your analytics, gain a better understanding of your business,
                and see where improvements can be made to increase your brands ROI.</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Discovery</li>
                    <li>Google Analytics</li>
                    <li>Develop Buyer Persona's</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Custom Reporting</li>
                    <li>Consulting and Strategy Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/research-and-analytics' className='bx-fade-right-hover'>Find Out More
                  <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </section>

    </div>
    <CallToAction/>
  </Layout>
)

export default services