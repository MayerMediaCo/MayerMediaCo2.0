import React from 'react'

import Layout from '../../components/layout/layout'
import CallToAction from '../../components/call-to-action/call-to-action'

import Computer from '../../assets/computer.png'

const ResearchAndAnalytics = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content">
          <h1 className="title has-text-centered">
            Research and Analytics
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim eius numquam
            qui expedita iure rerum suscipit nam doloremque temporibus maxime facere
            pariatur dolore, obcaecati praesentium aperiam iusto. Ad placeat voluptatum quam
            ea totam explicabo. Consequuntur ab delectus earum alias! Incidunt alias nihil
            sed impedit deleniti aut maxime nemo cupiditate.</p>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Discovery</h3>
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
                  Custom Reporting</h3>
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

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Google Analytics</h3>
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
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
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