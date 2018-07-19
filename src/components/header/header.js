import React from 'react'
import Link from 'gatsby-link'

import './styles.css'

import Logo from '../../assets/mmc_logo.png'

const Header = () => (
  <div className='hero'>
    <div className='nav-links'>
      <Link to='/about'>About |</Link>
      <Link to='/services'>Services |</Link>
      <Link to='/blog'>Blog |</Link>
      <Link to='/contact'>Contact</Link>
    </div>
    <div>
      <Link to='/'>
        <img
          src={Logo}
          alt=""
          style={{
          height: 100,
          width: 100,
          margin: '15px 50px'
        }}/>
      </Link>
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
