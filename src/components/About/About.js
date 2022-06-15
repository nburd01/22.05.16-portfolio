import React from 'react'
import './About.css'
import PP_Niall from '../../assets/img/PP_Niall.jpg';


export default function About() {

  return (
    //   <!--Navigation-->
    <div className="container" id='about'>
          <div className="title-div" >
                  <h3>Web Developper</h3>
          </div>
          
          <div className="body-sub-title">

            <div className="img-div">

                  <img src={PP_Niall} alt="profile img" />
                </div>

            
            <div className="description-div">
              <div className="description-content">
                <div className="description">
                        <h2>Niall Burdon</h2>
                  <p>Hi! I'm Niall, a web developer based in Rennes, France. I am very passionate about my job and hope to make a change someday with those skills. Furthermore I am a team player who also used to be a high level athlete and coach so teamwork and organizational skills are my second nature. I thoroughly enjoy problem solving, challenges, creating and learning on the daily.  </p>
                  <p>My daily tech stack mainly consist of ReactJS, Ruby on Rails and REST APIs, but see the extended list below for more. To keep in touch or contact me go check out my social media accounts, where I'm most active and would love to have a chat!</p>
                </div>
                <div className="btn-div">
                  <button>Build my project</button>
                </div>
              </div>
            </div>

          </div>
        
    </div>
  )
}
