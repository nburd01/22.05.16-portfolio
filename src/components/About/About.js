import React from 'react'
import './About.css'
import profile from '../../assets/img/profile.jpg';


export default function About() {

  return (
    //   <!--Navigation-->
    <div className="container about">
        <div className="component-div">

                <h3>Web Developper</h3>
        </div>

        <div className="img-div">
            <img src={profile} alt="profile img" />
        </div>
        <div className="about-description">
            <div className="name-div">
                <h2>Niall Burdon</h2>
            </div>
            <p>Hi! I'm Niall (danascript), a web developer based in Berlin, Germany. I am very passionate about my job, love problem solving and hope one day to make a change with the skills that I have. I'm a team player who is also a former Architect, so attention to details and organisational skills are my second name.   </p>
            <p>My daily tech stack mainly consists of MongoDB, Express.js, REST APIs, ReactJS and Node.js, but see the extended list below for more. To keep in touch or contact me - check out my social media accounts, where I'm most active and would love to have a chat!</p>
        </div>

    </div>
  )
}
