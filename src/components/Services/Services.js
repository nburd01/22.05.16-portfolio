import React from 'react'
import './Services.css'
import { useParams } from 'react-router-dom'
import {Link, Outlet} from 'react-router-dom'

export default function Services() {

  const params = useParams
  console.log('test-services')

  return (
    <div className="container services">
      <div className="component-div">
          <span>
              <h3>Services</h3>
          </span>
      </div>
      <div className="paragraph-div">
          <p>My vision and work led me to the opportunity to work with you in the following fields:</p>
      </div>
      <div className="services-div">
              <nav>
                <Link to='/services/branding'>Branding Support</Link>
                <Link to='/services/responsive'>Mobile Responsive</Link>
                <Link to='/services/seo'>SEO</Link>
                <Link to='/services/tailor-approach'>Tailor Approach</Link>
                <Link to='/services/user-friendly'>User Friendly</Link>
                <Link to='/services/web-apps'>Web apps</Link>
              </nav>
              <Outlet />
          </div>
    </div>
  )
}
