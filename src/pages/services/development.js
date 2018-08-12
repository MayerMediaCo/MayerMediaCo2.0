import React from 'react'

import Layout from '../../components/layout/layout'
import CallToAction from '../../components/call-to-action/call-to-action'

import Code from '../../assets/img/code.jpg'
import DevelopmentIcon from '../../assets/icons/development.svg'

const Development = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <h1 className="title has-text-centered">
            Development
          </h1>
          <div className="has-text-centered">
            <p>Technology is evolving at incredible rates.</p>
            <p>Staying on top of this growth, and knowing when to pivot and how to stay
              relevant in the digital landscape is essential.</p>
            <p>From basic marketing websites to native phone applications, I use the latest
              techniques and technology to ensure your brand stays modern in both software and
              on the web.</p>
          </div>
          <img
            src={DevelopmentIcon}
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
                  Front-End</h3>
              </div>
              <div className="card-content">
                <p>I utilize the latest front end technologies to bring your design mock ups to
                  life keeping in mind performance, usability, and implementing a solid foundation
                  for Search Engine Optimization in a way that helps you convert.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Front end web development is the majority of
                  your website in most instances and proper execution is key to converting.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  E-Commerce</h3>
              </div>
              <div className="card-content">
                <p>Utilizing services like Shopify or Stripe, I work to build a custom online
                  store front for your online business, utilizing the latest technologies to
                  provide a solid foundation for you to sell your products on. Custom E-Commerce
                  plugins are also available.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">You will have a site capable of selling
                  products in a safe and secure way to keep both you and your clients happy.
                </p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Wordpress</h3>
              </div>
              <div className="card-content">
                <p>Wordpress is a staple of the web. It allows anyone to get a site up and
                  running with a little bit of research and minimal code. Wordpress solutions for
                  your pages design, plugins for your store or forum, and conversion to and from
                  Wordpress are all available.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Wordpress is suitable for many people's needs,
                  and it is an incredibly popular solution for many people's needs. Custom work is
                  essential for standing apart in the crowd.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Back-End and Integrations</h3>
              </div>
              <div className="card-content">
                <p>Your Back End to your website is where funcitonality happens. Integrating
                  APIs to pull in data from external sources, custom content management solutions,
                  database setup, dashboards, and form handeling are just some of the solutions
                  possible from Back End work.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">High level functionality not available from
                  simple static sites can bring your site or application alive and provide a
                  dynamic experience for users.</p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Applications</h3>
              </div>
              <div className="card-content">
                <p>Developing mobile applications that are compatible with Android and IPhone
                  can propel a brand forward or take your brand into an entirely new space all
                  together, whether that is an app for the elusive cat videos or an all in one
                  productivity solution.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">There is a ton that goes into application
                  development, but it is a great way to productize a service, take your brand on
                  the go, and reach a new audience.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-image">
                <figure className='image is-2by1'>
                  <img src={Code} alt="Code on a computer."/>
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

export default Development