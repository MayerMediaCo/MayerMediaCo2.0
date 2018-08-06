import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'

import Computer from '../assets/computer.png'
import Logo from '../assets/mmc_logo.png'

const About = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <div>
            <h1 className='title has-text-centered'>The Journey So Far</h1>
            <p className='has-text-centered'>The most exciting thing about business is not
              running an empire, it is the grind put in to build the empire.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3>How it all Started</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>
                I am a creative entrepreneur aiming to help others succeed.</p>
              <p>From a young age, I had always put all my passion and effort into whatever
                creative endeavor I was doing at that moment, whether it was music, design,
                photography, or writing. I believe in breaking down the barriers in your area of
                expertise as a way of improving your thinking towards the subject. Having years
                of experience in creative mediums, the drive for absolute perfection, and a love
                for technology drove me towards web design and development as a way to satisfy
                all the different aspects of my passions.</p>
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
        </div>
      </section>

      <hr className="border"/>

      <section className="section">
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
              <i className="bx-pull-left bx bxs-quote-left bx-md"></i>
              <p className='about-block-quote'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, autem
                aspernatur. Hic perspiciatis deserunt voluptas. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Iusto, autem aspernatur. Hic perspiciatis deserunt
                voluptas.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3>What Sets Me Apart</h3>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>Coming from a varied background that includes sales, marketing, management,
                and finance, I differ from a lot of other creative entrepreneurs.
              </p>
              <p>How does that all tie together? I understand the structure of businesses,
                both large and small. I understand the importance of budgeting, how to
                collaborate and acheive set goals. I understand the relationship between company
                and consumer and what it takes to bridge the gap.
              </p>
              <p>How does this apply to you?</p>
              <p>I apply this extensive history to every project I undertake. Having
                experience in multiple parts of the chain, I utilize these many different
                perspectives to ensure the best possible outcome.</p>
              <p>I work with my clients to fully understand the needs of their business and
                help bridge gaps over the disconnect that happens in between. I make business
                decisions soley for the belief of wanting others to grow and exceed in their
                business or creative endeavors.</p>
              <p>
                I work for the small business oprotunists looking to impact the world with their
                products and services and the creative individuals looking to stand out and make
                their mark in their craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
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
      </section>

      <section className="section">
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
      </section>

    </div>
  </Layout>
)

export default About