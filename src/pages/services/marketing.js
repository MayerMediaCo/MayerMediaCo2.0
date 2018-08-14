import React from 'react'

import Layout from '../../components/layout/layout'
import CallToAction from '../../components/call-to-action/call-to-action'

import MarketingPhoto from '../../assets/img/marketing.jpg'
import MarketingIcon from '../../assets/icons/marketing.svg'

const Marketing = () => (
  <Layout>
    <div className='container'>
      <section className="section">
        <div className="content page-introduction">
          <h1 className="title has-text-centered">
            Marketing
          </h1>
          <div className="has-text-centered">
            <p>Get your brand heard.</p>
            <p>Old marketing tricks simply do not work like they used to. Brands are
              expected to engage and educate their audience like never before.</p>
            <p>I build marketing stratagies off of modern techniques utilizing social media,
              content, and other digital marketing techniques to help you engage your audience
              and make your mark.</p>
          </div>
          <img
            src={MarketingIcon}
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
                  Social Media Management</h3>
              </div>
              <div className="card-content">
                <p>Social media management takes a ton of planning and engagement, but will pay
                  off dividends in the long haul. Through research and constant analysis, I will
                  find your target audience and craft a strategy to help you reach them in their
                  native habitat.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">Social Media is one of the best ways to get
                  your brand heard and reach an audience in a meaningful and impactful way when
                  done with proper care and consistency and can deliver a ton of ROI.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Search Engine Optimization</h3>
              </div>
              <div className="card-content">
                <p>SEO is constantly changing with algorithm updates. Through research, I will
                  identify keywords to target and help you earn rank on Google and other search
                  engine algorithms by targeting specific key words, creating domain authority,
                  and website optimization.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">A Pay-Per-Click ad campaign can and will get
                  pricey and while SEO is a more long-term strategy, it is the most effective way
                  to migrate away from PPC ads and grow organic traffic.</p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Content Marketing and Management</h3>
              </div>
              <div className="card-content">
                <p>Creating impactful content is a great way to increase discoverability, build
                  trust with your audience, establish authority, and it is great for SEO as well.
                  I will create a content strategy to help your audience discover and connect with
                  your brand through keyword research and traffic analysis.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">The more "stuff" you have out in the digital
                  world increases the potential of being discovered in an organic and helpful way
                  and can provide much higher quality leads than other methods of digital
                  marketing.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  Pay-Per-Click Advertising</h3>
              </div>
              <div className="card-content">
                <p>PPC advertising can be an effective way to get your brand in front of a wide
                  range of audiences at once, but can be a huge money sink. Increase your ROI by
                  using highly targeted campaigns developed through research of your audience and
                  your conversion goals.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">PPC campaigns can be a great way to jumpstart
                  your outreach and get your brand heard and can be highly effective when coupled
                  with more long term digital marketing stratagies.</p>
              </div>
            </div>
          </div>

          <br/>

          <div className='columns is-desktop'>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-header">
                <h3 className='card-header-title content-title'>
                  E-Mail Marketing</h3>
              </div>
              <div className="card-content">
                <p>Email marketing allows you to grow an audience that you have complete control
                  over. I utilize different services such as Drip or ConvertKit to craft a
                  campaign to reach your audience directly and personably to maximize impact.</p>
                <hr className="border"/>
                <h5 className='content-title'>Why You Need This</h5>
                <p className="content-subscript">A proper email marketing campaign is an
                  effective way to highly monitor your audience interactions, reach your audience
                  in a more intimate way, and tell your audience about new and exciting things
                  with your brand.</p>
              </div>
            </div>
            <div className="card column is-full-tablet is-half-desktop">
              <div className="card-image">
                <figure className='image is-2by1'>
                  <img src={MarketingPhoto} alt=""/>
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

export default Marketing