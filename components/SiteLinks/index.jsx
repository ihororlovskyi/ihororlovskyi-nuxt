import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>
                <ul>
                    <li>
                        <a href={ config.siteLinkedinUrl } target='_blank'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteFbUrl } target='_blank'>
                            <i className='fa fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteGithubUrl } target='_blank'>
                            <i className='fa fa-github-alt'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteSoundcloudUrl } target='_blank'>
                            <i className='fa fa-soundcloud'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteInstagramUrl } target='_blank'>
                            <i className='fa fa-instagram'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteGpUrl } target='_blank'>
                            <i className='fa fa-google-plus'></i>
                        </a>
                    </li>
                    <li>
                        <a href={ config.siteTwitterUrl } target='_blank'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SiteLinks
