import React from 'react'

import Layout from '../../components/layout/layout'
import CallToAction from '../../components/call-to-action/call-to-action'

import Mindmap from '../../assets/img/mindmap.png'
import AnalyticsIcon from '../../assets/icons/analytics.svg'

const ResearchAndAnalytics = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <h1 className="title has-text-centered">
            Research and Analytics
          </h1>
          <div className="has-text-centered">
            <p>Understand your business in a whole new way.</p>
            <p>Discover who your audience is, where your traffic comes from, and what they
              enjoy about you.
            </p>
            <p>I will help you understand your analytics and what it means to your business.
              From there, strategies are put into place to ensure you maximize your
              conversions and strengthen your sales funnels.</p>
          </div>
          <img
            src={AnalyticsIcon}
            alt=""
            className='introduction-image is-hidden-mobile'/>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Discovery</h3>
              </div>
              <div className="card-content">
                <p>Discovery is all about taking a deep look at your business and seeing what
                  hurts. Research is done on your ideal client, clients you would like to target,
                  and strategy already in place to identify any potential areas of improvement.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Identifying areas of improvement is key to
                  setting a course of corrective action to get the results that you are looking
                  for.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Custom Reporting</h3>
              </div>
              <div className="card-content">
                <p>Your analytics are the cold hard facts of how your business is performing,
                  but they are not always the easiest to interpret and are rarely all in the same
                  place.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Having all your analytics in a comprehensive
                  report will grant you better insight and understanding of your business.</p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Google Analytics</h3>
              </div>
              <div className="card-content">
                <p>Google Analytics is almost the source of complete truth for your online
                  performance, but the abbundance of information can be both overwhelming and in
                  some cases even irrelevant. I can help your properly set analytics up on your
                  website, explain what everything means, and create custom reporting in the
                  Google Analytics Dashboard to only show relevant information to you.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Being able to quickly see and understand your
                  Google Analytics will help you spend less time on the numbers and more time on
                  actionable steps.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Consuling and Strategy Development</h3>
              </div>
              <div className="card-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
                  laudantium ipsa praesentium autem veritatis velit eaque maxime quasi nulla ad
                  quisquam inventore illo culpa animi? Facere dignissimos deserunt velit dicta!</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Labore impedit facilis dolore doloremque ullam unde.</p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Develop Buyer Persona's</h3>
              </div>
              <div className="card-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
                  laudantium ipsa praesentium autem veritatis velit eaque maxime quasi nulla ad
                  quisquam inventore illo culpa animi? Facere dignissimos deserunt velit dicta!</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Labore impedit facilis dolore doloremque ullam unde.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-image">
                <figure className='image center-image is-2by1'>
                  <img src={Mindmap} alt=""/>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <CallToAction/>
  </Layout>
)

export default ResearchAndAnalytics