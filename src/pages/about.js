import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'

import Logo from '../assets/img/mmc_logo.png'
import Portrait from '../assets/img/portrait.jpg'

const About = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <div>
            <h1 className='title has-text-centered'>The Journey So Far</h1>
            <p className='has-text-centered'>I am passionate about working with creative
              entrepreneurs and small businesses to help them acheive success in the digital
              realm.</p>
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
              <p>From a young age, I had always put all my passion and effort into whichever
                endeavor I was going to take on, whether it was music, design, photography, or
                writing.</p>
              <p>
                From my experience I've found that breaking down the barriers in your areas of
                passion as a way of expressing your creativity to the fullest. Pushing the
                limits is key to standing out from the crowd.</p>
              <p>With having years of experience in creative mediums, the drive for absolute
                perfection and a fascination for technology lead me to web design and
                development as a way to satisfy all the different aspects of my creativity and
                passions.</p>
            </div>
            <div className="column">
              <p>I decided to take the leap into the freelance journey as a way to express my
                creativity, challange myself and my capabilities, and to educate brands who are
                like minded.</p>
              <p>
                I spent much on my high school career dedicated to small side hustles that
                involved the local music scene. I would do everything from Social Media
                Management to Myspace Layouts to even booking and promoting and audio
                engineering. I apply the same desires I had to see the local music scene thrive
                that I do today in working with my clients to take their brands to the next
                level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border"/>

      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="image">
              <figure className='image portrait'>
                <img src={Portrait} alt="Danny Mayer"/>
              </figure>
            </div>
          </div>
          <div className="column about-content-block">
            <blockquote>
              <i className="bx-pull-left bx bxs-quote-left bx-md"></i>
              <p className='about-block-quote'>
                I make business decisions solely for the belief of wanting others to grow and
                exceed in their business or creative endeavors."
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
                collaborate and achieve set goals. I understand the relationship between company
                and consumer and what it takes to bridge the gap.
              </p>
              <p>How does this apply to you?</p>
              <p>I apply this extensive history to every project I undertake. Having
                experience in multiple parts of the chain, I utilize these many different
                perspectives to ensure the best possible outcome.</p>
              <p>I work with my clients to fully understand the needs of their business and
                help bridge gaps over the disconnect that happens in between. I make business
                decisions solely for the belief of wanting others to grow and exceed in their
                business or creative endeavors.</p>
              <p>
                I work for the small business opportunists looking to impact the world with
                their products and services and the creative individuals looking to stand out
                and make their mark in their craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half is-narrow">
            <div className="image is-pulled-left">
              <figure className="image is-128x128">
                <img src={Logo} alt="Mayer Media Co."/>
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