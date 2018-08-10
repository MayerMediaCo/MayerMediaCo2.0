import React from 'react'

import Layout from '../../components/layout/layout'
import CallToAction from '../../components/call-to-action/call-to-action'

import DesignPhoto from '../../assets/img/design.jpg'
import DesignIcon from '../../assets/icons/design.svg'

const Design = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <h1 className="title has-text-centered">
            Design
          </h1>
          <div className="has-text-centered">
            <p>Your visual identity should tell a story.</p>
            <p>Using a universal flavor of design is important to create cohesion and
              uniformity for your brand online.</p>
            <p>Design comes in many styles and is applied to many things. I use a
              combination of layout, typography, and illustration to bring all of your
              branding elements together.</p>
          </div>
          <img src={DesignIcon} alt="" className='introduction-image is-hidden-mobile'/>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Branding</h3>
              </div>
              <div className="card-content">
                <p>To put it simply, branding is the digital representation of you. Everything
                  from your color pallete to your tone should work together to be a cohesive way
                  to position yourself in the light you want to be perceived in.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">A proper brand strategy will strengthen your
                  online identity and create a cohesive experience for your clients and leads.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  User Interface / User Experience</h3>
              </div>
              <div className="card-content">
                <p>A proper design should focus on branding, functionality, and accssessibility.</p>
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
                  Logos</h3>
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
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Advertising / Promotional</h3>
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
                  Print</h3>
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
                  <img src={DesignPhoto} alt=""/>
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

export default Design