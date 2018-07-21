import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../assets/mmc_logo.png'

class Navbar extends React.Component {

  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-transparent" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item">
            <img className='nav-image' src={Logo} alt="Mayer Media Co"/>
            Mayer Media Co
          </Link>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={this.state.isActive
          ? 'navbar-menu is-active'
          : 'navbar-menu'}>
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to='/about' className='navbar-item'>
                About
              </Link>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to='/services' className='navbar-item navbar-link'>
                Services
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to='/services/design' className='navbar-item'>
                  Design
                </Link>
                <Link to='/services/development' className='navbar-item'>
                  Development
                </Link>
                <Link to='/services/marketing' className='navbar-item'>
                  Marketing
                </Link>
                <Link to='/services/research-and-analytics' className='navbar-item'>
                  Research and Analytics
                </Link>
              </div>
            </div>

            <div className="navbar-item">
              <Link to='/blog' className='navbar-item'>
                Blog
              </Link>
            </div>
            <div className="navbar-item">
              <Link to='/contact' className='navbar-item'>
                Contact
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to='#'>
                <span className="icon">
                  <i className="nav-icon bx bxl-twitter bx-border-circle"></i>
                </span>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to='#'>
                <span className="icon">
                  <i className="nav-icon bx bxl-instagram bx-border-circle"></i>
                </span>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to='#'>
                <span className="icon">
                  <i className="nav-icon bx bxl-github bx-border-circle"></i>
                </span>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to='#'>
                <span className="icon">
                  <i className="nav-icon bx bxl-linkedin bx-border-circle"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
