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
            <p>A brief description of my previous employment and educational background</p>
        </div>

        <div className="resume-items-div">

            <div className="cards">
              <div className="card">
                {/* <img src={profile} alt="My cat" /> */}
                <p className="date">050293</p>
                <p className="title">Graduated with Master's Degree in Marketing</p>
              </div>
              <div className="card">
                {/* <img src={profile} alt="My cat" /> */}
                <p className="date">050293</p>
                <p className="title">Graduated with Master's Degree in Marketing</p>
              </div>
              <div className="card">
                {/* <img src={profile} alt="My cat" /> */}
                <p className="date">050293</p>
                <p className="title">Graduated with Master's Degree in Marketing</p>
              </div>
              
            </div>

        </div>
    </div>
  )
}
 