import React from 'react'
import './Tech.css'
import JS from '../../assets/img/JS.png';
import htmlcss from '../../assets/img/htmlcss.png';
import react from '../../assets/img/react.png';
import ruby from '../../assets/img/ruby.png';
import rails from '../../assets/img/rails.png';
import heroku from '../../assets/img/heroku.png';


export default function About() {

  return (
    //   <!--Navigation-->
    <div className="container-small tech" id="tech">
        <div className="title-div">
            <span>
                <h3>My Tech</h3>
            </span>
        </div>
        <div className="paragraph-div">
            <p>The best way to learn and to grow is by getting out of your comfort zone.</p>
            <p> And this is what getting out of my comfort zone gave me:</p>
        </div>
        <div className="tech-list">

                  <img src={htmlcss} alt="HTML CSS" />

                  <img src={JS} alt="Javascript" />

                  <img src={react} alt="React" />

                  <img src={ruby} alt="Ruby" />

                  <img src={rails} alt="Ruby on Rails" />

                  <img src={heroku} alt="Heroku" />
     

        </div>
    </div>

  )
}
