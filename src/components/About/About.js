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
              <div className="blog-home">
            <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#08BDBA" d="M50.4,-20C56.3,1.9,46,25.5,26.3,40.8C6.7,56.1,-22.2,63.2,-39.3,51.4C-56.4,39.6,-61.8,8.9,-53.3,-16.6C-44.8,-42,-22.4,-62.1,-0.1,-62.1C22.2,-62.1,44.4,-41.9,50.4,-20Z" transform="translate(100 100)" />
            </svg>
              </div>  
            </div>


            
            <div className="description-div">
              <div className="description-content">
                <div className="description">
                        <h2>Niall Burdon</h2>
                  <p>Hi! I'm Niall, a web developer based in Rennes, France. I am very passionate about my job and hope to make a change someday with those skills. Furthermore I am a team player who also used to be a high level athlete and coach so teamwork and organizational skills are my second nature. I thoroughly enjoy problem solving, challenges, creating and learning on the daily.  </p>
                  <p>My daily tech stack mainly consist of ReactJS, Ruby on Rails and REST APIs, but see the extended list below for more. To keep in touch or contact me go check out my social media accounts, where I'm most active and would love to have a chat!</p>
                </div>
                <div className="btn-cta">
                  <input type="submit" value="Build my project"></input>
                </div>
              </div>
            </div>

          </div>
        
    </div>
  )
}
