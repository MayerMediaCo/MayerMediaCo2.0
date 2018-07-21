import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../assets/mmc_logo.png'

class Navbar extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-transparent"
          aria-label="main navigation">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item">
            <img className='nav-image'
              src={Logo} alt="Mayer Media Co"/>
              Mayer Media Co
          </Link>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <Link to='/about' className="navbar-item">
              About
            </Link>
            <hr className="navbar-divider" />
            <Link to='/services' className="navbar-item">
              Services
            </Link>
            <hr className="navbar-divider" />
            <Link to='/blog' className="navbar-item">
              Blog
            </Link>
            <hr className="navbar-divider" />
            <Link to='/contact' className="navbar-item">
              Contact
            </Link>
            <hr className="navbar-divider" />
          </div>
          <div className="navbar-end">
            <Link to='#' className="navbar-item">
              <span className="icon">
                <i className="nav-icon bx bxl-twitter bx-border-circle"></i>
              </span>
            </Link>
            <Link to='#' className="navbar-item">
              <span className="icon">
                <i className="nav-icon bx bxl-instagram bx-border-circle"></i>
              </span>
            </Link>
            <Link to='#' className="navbar-item">
              <span className="icon">
                <i className="nav-icon bx bxl-github bx-border-circle"></i>
              </span>
            </Link>
            <Link to='#' className="navbar-item">
              <span className="icon">
                <i className="nav-icon bx bxl-linkedin bx-border-circle"></i>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
