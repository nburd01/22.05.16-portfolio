import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import codewars from '../../assets/img/codewars.png';
  

export default function Footer() {
  return (
    <div className="container footer">
      <div className="icon-list">

        <a href="https://github.com/nburd01">
            <i >
            <FontAwesomeIcon icon={faGithub} size="2x" color="red" />
            </i>
          </a>

          <a href="https://www.linkedin.com/in/niallburdon/">
            <i>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </i>
          </a>

      </div>
    </div>
  )
}
