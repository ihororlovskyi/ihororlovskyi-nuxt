import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import SiteSidebar from '../components/SiteSidebar'
import ExperienceList from '../components/ExperienceList'
import ProjectList from '../components/ProjectList'

class SiteIndex extends React.Component {
    render() {

        return (
            <DocumentTitle title={ config.siteTitle }>
                <div>
                    <SiteSidebar {...this.props}/>
                    <div className='content'>
                        <div className='main'>
                            <div className='main-inner'>
                                <ProjectList {...this.props}/>
                                <ExperienceList {...this.props}/>
                            </div>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

export default SiteIndex
