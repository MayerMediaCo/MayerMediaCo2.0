import React from 'react'

import Layout from '../components/layout/layout'
import CallToAction from '../components/call-to-action/call-to-action'
import BlogCard from '../components/blog-card/blog-card'

const blog = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content">
          <div className='has-text-centered'>
            <h1 className='title'>Blogs and Articles</h1>
            <h3 className='subtitle'>
              I love to write and help people out. If you don't find what you are looking for
              or want to suggest topics, send me an email
            </h3>
            <h4 className='has-text-centered'>
              <a href={`mailto:mayermediaco@gmail.com`}>mayermediaco@gmail.com</a>
            </h4>
            <hr className="border"/>
          </div>
        </div>
        <div className="columns">
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
        </div>
        <div className="columns">
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
        </div>
        <div className="columns">
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
          <div className="column"><BlogCard/></div>
        </div>
      </section>
    </div>
    <CallToAction/>
  </Layout>
)

export default blog