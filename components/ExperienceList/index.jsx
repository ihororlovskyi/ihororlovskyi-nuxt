import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import access from 'safe-access'

import './style.scss'

class ExperienceList extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'experience') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')

                pageLinks.push(
                    <div>
                        <Link className='experience-list__item' to={ prefixLink(page.path) } > { title } </Link>
                    </div>
                )
            }
        })

        return (
            <div className='experience-list'>
                <div>ExperienceList:</div>
                { pageLinks }
            </div>
        );
    }
}


export default ExperienceList
