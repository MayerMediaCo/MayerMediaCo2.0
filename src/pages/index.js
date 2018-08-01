import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import CTA from '../components/call-to-action/call-to-action'

import Computer from '../assets/computer.png'

const IndexPage = () => (
  <Layout>
    <Header/>
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h1 className='has-text-centered'>
                Make Your Mark
              </h1>
              <p>
                I am a freelance creative focusing on branding, web design, development, and
                digital marketing to help small businesses and creative entrepreneurs bring
                their brand to life, get heard by customers, and make their mark in the digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="card column">
            <div className="card-header">
              <Link to='/services/design' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bxs-layout bx-border-circle"></i>
                  Design</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Create the best representation of your brand, optimizie marketing and print
                materials or give your website a fresh new look.</p>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/design'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
          <div className="card column">
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
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/development'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
          <div className="card column">
            <div className="card-header">
              <Link to='/services/marketing' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-trending-up bx-border-circle"></i>
                  Marketing</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Get your brand and message heard utilizing modern content, social media,
                pay-per-click, and search engine marketing techniques.</p>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/marketing'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
          <div className="card column">
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
              <p>Make sense of your analytics and see where improvements can be made to
                increase your brands ROI.</p>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='/services/research-and-analytics'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h3 className='content-title has-text-centered'>
                Lorem, ipsum dolor.
              </h3>
              <p className='content-body'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolore eum
                vitae quam. Voluptatem in recusandae nisi culpa officiis, dolorum, eum illo
                quibusdam debitis libero asperiores eveniet id? Eaque assumenda reiciendis nemo
                illo nostrum explicabo dolores, sed natus, est sequi laborum a, officia et optio
                ratione nisi dicta nobis rem!
              </p>
            </div>
          </div>
          <div className="column">
            <figure className='image'>
              <img src={Computer} alt=""/>
            </figure>
          </div>
        </div>
      </section>
    </div>
    < CTA/>
  </Layout>
)

export default IndexPage
