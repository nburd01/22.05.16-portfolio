import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="container footer">
      <div className="icons-div">
        <div className="icon">
          <i >
          <FontAwesomeIcon icon={faGithub} size="2x" color="red" />
          </i>
        </div>
        <div className="icon">
          <i>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </i>
        </div>  
      </div>
    </div>
  )
}
