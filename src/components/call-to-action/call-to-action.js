import React from 'react'
import Link from 'gatsby-link'

const CallToAction = () => (
  <section className="section" id='call-to-action'>
    <h1 className='has-text-centered'>Make Your Mark</h1>
    <div className='has-text-centered'>
      <Link to='/contact' className='button is-large is-rounded'>Get in Touch Now
      </Link>
    </div>
  </section>
)

export default CallToAction