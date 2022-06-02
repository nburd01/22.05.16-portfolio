import React from 'react'
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import codewars from '../../assets/img/codewars.png';
  

export default function Footer() {
  return (
    <div className="container footer">
      <div className="icons-div">
        <div className="icon-list">

            <i >
            <FontAwesomeIcon icon={faGithub} size="2x" color="red" />
            </i>


            <i>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </i>

            <i>
            <img src={codewars} alt="Code Wars" />
            </i>
 
        </div>
      </div>
    </div>
  )
}
