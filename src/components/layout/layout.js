import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

import config from '../../../meta/config'

import 'boxicons/css/boxicons.min.css'
import './layout.sass'


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: '{config.siteDescription}' },
          ]}
        />
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
