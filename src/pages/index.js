import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import CTA from '../components/call-to-action/call-to-action'

import Computer from '../assets/computer.png'

const IndexPage = () => (
  <Layout>
    <Header/>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content">
              <h1 className='has-text-centered'>
                Make Your Mark
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut adipisci iste
                harum iure minima hic, architecto repudiandae facere tempora enim nostrum vero
                esse magni itaque quaerat dolore dignissimos nulla nesciunt sapiente deserunt
                explicabo quas cumque officia. Expedita ipsum cum officiis obcaecati placeat?
                Dolor alias, eius hic, cum explicabo et animi deleniti inventore perferendis
                laudantium sunt, quae quaerat? Corporis numquam asperiores in? Quidem, quia.
                Accusantium itaque explicabo neque deleniti sed reiciendis eum, recusandae a
                porro quas aliquam vel hic repudiandae dolores consequatur vitae sunt tempora?
                Consequuntur harum amet corporis molestias nemo et laudantium modi, error ipsam
                dignissimos repellat, beatae veniam.
              </p>
            </div>
          </div>
        </div>

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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
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
      </div>
    </section>
    < CTA/>
  </Layout>
)

export default IndexPage
