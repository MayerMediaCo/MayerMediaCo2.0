import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <section className='hero header is-medium'>
    <div className=' container hero-head'></div>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title'>
          Mayer Media Co.
        </h1>
        <h3 className='subtitle'>
          <Link to='services'>Design | Development | Marketing
          </Link>
        </h3>
      </div>
    </div>
  </section>
)

export default Header
