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
                <p>A proper design should focus on branding, functionality, and accssessibility.
                  I design your website with optimization of these elements in mind and provide
                  all the files necessary to hand off to your team once you are satisfied.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">The proper balance of appealing design and
                  accssessibility to all users is necessary to attract and convert visitors.</p>
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
                <p>Your logo is everywhere and is arguably one of the most important elements to
                  your brand. I work with brands to create logos that are impactful and
                  recognizable, simple and effective, and an inline with your brand and ideals.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Logos end up on everything, from shirts to
                  letterheads. Properly implemented logos will represent your brand in the best
                  way on every medium.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Advertising / Promotional</h3>
              </div>
              <div className="card-content">
                <p>Your products and services are the life of your business and should be
                  represented with the utmost care. From product photography to service
                  advertisements and everything in between, researching and planning for optimal
                  content is key in digital advertisement.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Custom designs and photography should be
                  created for specific marketing campaigns to best represent your brand.</p>
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
                <p>While print is not as common in the digital age, it is still incredibly
                  important. By applying an understanding of goals and your market, and tangible
                  considerations like size and methods of delivery, print materials are created.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">While not utilized as often as before, clean
                  designs for letterheads, business cards, mailers and other print goods will help
                  you stand apart from competition.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-image">
                <figure className='image center-image is-2by1'>
                  <img
                    className='is-overlay'
                    src={DesignPhoto}
                    alt="A pen laying on top of paper with a wireframe drawn on it."/>
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