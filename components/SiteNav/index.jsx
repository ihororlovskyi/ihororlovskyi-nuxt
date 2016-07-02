import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> 1 Articles
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={ location.pathname === prefixLink('/about') ? "current" : null }> 2 About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={ location.pathname === prefixLink('/contact') ? "current" : null }> 3 Contact
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
