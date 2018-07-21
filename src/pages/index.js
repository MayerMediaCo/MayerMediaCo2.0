import React from 'react'

import Layout from '../components/layout/layout'

import Computer from '../assets/computer.png'

const IndexPage = () => (
  <Layout>
    <section className="section">
      <div className='container'>
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
  </Layout>
)

export default IndexPage
