import React from 'react'
import './Resume.css'
// import profile from '../../assets/img/profile.jpg';

export default function Resume() {
  return (
    <div className="container resume" id="resume">
        <div className="title-div">
            <span>
                <h3>Résumé</h3>
            </span>
        </div>

        <div className="paragraph-div">
            <p>A brief description of my previous employment and educational background :</p>
        </div>

        <div className="items-div">

            <div className="cards">
              <div className="card">
                <div className="card-circle">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>  
                {/* <img src={profile} alt="My cat" /> */}
                <div className="top-line">
                  <p className="date">2022</p>
                  <p className="institution">The Hacking Project</p>
                </div>
                <div className="bottom-line">
                  <p className="title">Developer Boot Camp (6 months)</p>
                </div>
              </div>
              <div className="card">
              <div className="card-circle">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>  
                {/* <img src={profile} alt="My cat" /> */}
                <div className="top-line">
                  <p className="date">15-21</p>
                  <p className="institution">IGR IAE Management School</p>
                </div>
                <div className="bottom-line">
                  <p className="title">Masters Degree in Marketing </p>
                </div>
              </div>
              <div className="card">
                  <div className="card-circle">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>  
                {/* <img src={profile} alt="My cat" /> */}
                <div className="top-line">
                  <p className="date">08-14</p>
                  <p className="institution">High Level Athlete</p>
                </div>
                <div className="bottom-line">
                  <p className="title">Football Goalkeeper in four countries</p>
                </div>
              </div>
            </div>
          </div>





      </div>

  )
}
 