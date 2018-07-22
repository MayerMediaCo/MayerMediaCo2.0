import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'

import Computer from '../assets/computer.png'
import Logo from '../assets/mmc_logo.png'

const About = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content">
          <div>
            <h1 className='title has-text-centered'>The Journey So Far</h1>
            <p className='has-text-centered'>The most exciting thing about business is not
              running an empire, it is the grind put in to build the empire.</p>
          </div>
        </div>
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3>How it all Started</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nihil voluptate
                aliquid ullam ipsa eum eos sint magni eveniet ex omnis, amet distinctio veniam
                consequuntur sunt numquam harum hic consequatur. Doloribus, cumque vitae, culpa
                minima harum quibusdam officia rerum deleniti veniam eligendi quae explicabo
                laudantium, facilis saepe quod placeat eaque hic necessitatibus ratione odio?
                Architecto dolorum aspernatur quis dolores velit quia quisquam aliquid veritatis
                eius! Illum nobis, illo libero odio molestiae vitae deleniti voluptatum
                reiciendis corrupti modi, officia a omnis optio ratione fuga ea culpa! Neque
                voluptatum vero autem distinctio omnis, cum voluptate minus nostrum corporis
                voluptas, fuga veniam doloremque?</p>
            </div>
            <div className="column">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe esse ea
                atque dolores labore fuga, nostrum dicta? Exercitationem nam ullam dolor
                voluptatem natus. Placeat voluptatum qui maiores, distinctio autem officiis
                dignissimos eum fugiat, vel cupiditate ad voluptas expedita debitis a, veritatis
                quam reiciendis! Eum sunt quidem inventore consectetur, ipsa amet harum repellat
                vitae neque perferendis eveniet molestias officia adipisci, quod voluptatem,
                doloribus provident dolores? Aliquam vero quas nobis vitae! Necessitatibus, odio
                tempora. Vitae repudiandae veniam, officiis mollitia aspernatur corrupti natus
                quas dolor, asperiores eum sunt laborum id quisquam numquam aliquid, nihil
                eligendi corporis nostrum sit vel consectetur facilis veritatis.</p>
            </div>
          </div>

          <hr className="border"/>

          <div className="columns">
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
            <div className="column about-content-block">
              <blockquote>
                <i className="bx-pull-left bx bxs-quote-left bx-lg"></i>
                <p className='about-block-quote'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, autem
                  aspernatur. Hic perspiciatis deserunt voluptas. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Iusto, autem aspernatur. Hic perspiciatis deserunt
                  voluptas.
                </p>
                <p className="content-subscript has-text-right">
                  - lorem ipsum dolor
                </p>
              </blockquote>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <h3>What Sets Me Apart</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nihil voluptate
                aliquid ullam ipsa eum eos sint magni eveniet ex omnis, amet distinctio veniam
                consequuntur sunt numquam harum hic consequatur. Doloribus, cumque vitae, culpa
                minima harum quibusdam officia rerum deleniti veniam eligendi quae explicabo
                laudantium, facilis saepe quod placeat eaque hic necessitatibus ratione odio?
                Architecto dolorum aspernatur quis dolores velit quia quisquam aliquid veritatis
                eius! Illum nobis, illo libero odio molestiae vitae deleniti voluptatum
                reiciendis corrupti modi, officia a omnis optio ratione fuga ea culpa! Neque
                voluptatum vero autem distinctio omnis, cum voluptate minus nostrum corporis
                voluptas, fuga veniam doloremque?</p>
            </div>
            <div className="column">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus saepe esse ea
                atque dolores labore fuga, nostrum dicta? Exercitationem nam ullam dolor
                voluptatem natus. Placeat voluptatum qui maiores, distinctio autem officiis
                dignissimos eum fugiat, vel cupiditate ad voluptas expedita debitis a, veritatis
                quam reiciendis! Eum sunt quidem inventore consectetur, ipsa amet harum repellat
                vitae neque perferendis eveniet molestias officia adipisci, quod voluptatem,
                doloribus provident dolores? Aliquam vero quas nobis vitae! Necessitatibus, odio
                tempora. Vitae repudiandae veniam, officiis mollitia aspernatur corrupti natus
                quas dolor, asperiores eum sunt laborum id quisquam numquam aliquid, nihil
                eligendi corporis nostrum sit vel consectetur facilis veritatis.</p>
            </div>
          </div>

          <div className="columns is-gapless">
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
          </div>
          <div className="columns is-gapless">
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="image">
                <figure className='image is-2by1'>
                  <img src={Computer} alt=""/>
                </figure>
              </div>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-half is-narrow">
              <div className="image is-pulled-left">
                <figure className="image is-128x128">
                  <img src={Logo} alt=""/>
                </figure>
              </div>
              <h3 className='has-text-centered'>Want to Connect or Learn More?</h3>
              <div className='has-text-centered'>
                <Link to='/contact' className='button is-medium is-rounded'>Get In Touch Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </Layout>
)

export default About