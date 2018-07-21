import React from 'react'

import Navbar from '../navbar/navbar'

const Header = () => (
  <section className='hero header is-medium'>
    <div className='hero-head'>
      <Navbar />
    </div>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title'>
          Mayer Media Co.
        </h1>
        <h3 className='subtitle'>
          Design | Development | Marketing
        </h3>
      </div>
    </div>
  </section>
)

export default Header
