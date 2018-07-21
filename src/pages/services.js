import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'

const services = () => (
  <Layout>
    <section className='section'>
      <div className="container content">
        <div>
          <h1 className='has-text-centered title'>What we can do for you</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim eius numquam
            qui expedita iure rerum suscipit nam doloremque temporibus maxime facere
            pariatur dolore, obcaecati praesentium aperiam iusto. Ad placeat voluptatum quam
            ea totam explicabo. Consequuntur ab delectus earum alias! Incidunt alias nihil
            sed impedit deleniti aut maxime nemo cupiditate.</p>
          <p className='has-text-centered is-size-5'>Know what you need already?</p>
          <div className='has-text-centered'>
            <Link to='/contact' className='button is-medium is-rounded'>Get in Touch Now
            </Link>
          </div>
        </div>
        <hr className="border"/>

        <div className='columns'>
          <div className="card column is-6">
            <div className="card-header">
              <Link to='#' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bxs-layout bx-border-circle"></i>
                  Design</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                a! Quibusdam, cum sequi?</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='#'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
          <div className="card column is-6">
            <div className="card-header">
              <Link to='#' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-code-curly bx-border-circle"></i>
                  Development</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                a! Quibusdam, cum sequi?</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='#'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
        </div>

        <div className='columns'>
          <div className="card column is-6">
            <div className="card-header">
              <Link to='#' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-trending-up bx-border-circle"></i>
                  Marketing</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                a! Quibusdam, cum sequi?</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='#'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
          <div className="card column is-6">
            <div className="card-header">
              <Link to='#' className='card-header-title is-centered'>
                <h3 className=''>
                  <i className="card-header-icon bx bx-globe bx-border-circle"></i>
                  Research and Analytics</h3>
              </Link>
            </div>
            <div className="card-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                a! Quibusdam, cum sequi?</p>
              <hr className="border"/>
              <div className="columns card-list">
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <Link to='#'>Find Out More</Link>
                <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
              </div>
            </footer>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default services