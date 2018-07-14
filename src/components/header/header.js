import React from 'react'
import Link from 'gatsby-link'

import './styles.css'

import Logo from '../../assets/mmc_logo.png'

const Header = () => (
  <div className='hero'>
    <div className='nav-links'>
      <Link>About |</Link>
      <Link>Services |</Link>
      <Link>Blog |</Link>
      <Link>Contact</Link>
    </div>
    <div>
      <img
        src={Logo}
        alt=""
        style={{
        height: 100,
        width: 100,
        margin: '0 50px'
      }}/>
    </div>
    <h1 className='hero-title'>
      Mayer Media Co.
    </h1>
    <h3 className='hero-sub'>
      Design | Development | Marketing
    </h3>
  </div>
)

export default Header
