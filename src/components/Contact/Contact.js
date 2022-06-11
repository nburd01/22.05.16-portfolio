import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className="container contact" id="contact">
        <div className="title-div">
            <span>
                <h3>Contact</h3>
            </span>
        </div>
        <div className="paragraph-div">
            <p>Follow me on social media to see my recent updates and feel free to DM me!</p>
        </div>
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
