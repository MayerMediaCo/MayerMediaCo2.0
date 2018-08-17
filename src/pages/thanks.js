import React from 'react'
import Link from "gatsby-link"

import Layout from '../components/layout/layout'

const Thanks = () => (
  <Layout>
    <div className="container">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className='card blog-card'>
          <div className="card-title">
            <h3 className='title has-text-centered'>
              Thank you for reaching out about your project
            </h3>
          </div>
          <section className="section">
            <p>I look forward to speaking with you about your project soon! In the mean
              time, check out some of the articles I have written that may help us jumpstart
              the process!
            </p>
          </section>
          <div className="card-content">
            <div className='has-text-centered'>
              <Link to='/blog' className='button is-medium is-rounded'>Go to the blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Thanks