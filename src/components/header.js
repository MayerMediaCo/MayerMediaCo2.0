import React from 'react'
import Link from 'gatsby-link'

import Logo from '../assets/mmc_logo.png'

const Header = () => (
  <div
  style={{
    background: '#FEFFFF'
  }}
  >
    <div>
      <img src={Logo} alt=""/>
    </div>
    <div>
      <Link>About |</Link>
      <Link>Services |</Link>
      <Link>Blog |</Link>
      <Link>Contact</Link>
    </div>
    <h1>
      Mayer Media Co.
    </h1>
    <h3>
      Design | Development | Marketing
    </h3>
  </div>
)

export default Header
