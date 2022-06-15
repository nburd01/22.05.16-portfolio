import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="container-large portfolio" id="portfolio">

      <div className="left">
        <div className="title-div">
            <span>
                <h3>Portfolio</h3>
            </span>
        </div>
        <div className="paragraph-div">
            <p>I also like to get funky! Here are some projects that I've done in the past</p>
        </div>
      </div>
      <div className="right">
        <div className="cards">
              <a href="https://google.com"target="_blank" rel="noreferrer">
                <div className="card">
                    <h2>
                      Google 
                    </h2>
                    <p>(just kidding)</p>
                </div>
              </a>
        </div>
        <div className="cards">
              <a href="https://yuka-sport-dev2.herokuapp.com"target="_blank" rel="noreferrer">
                <div className="card">
                    <h2>
                      Yuka Sport
                    </h2>
                    <p>Création de site, UX, UI</p>
                </div>
              </a>
        </div>
        <div className="cards">
              <a href="https://nburd01.github.io/rawg-project.github.io"target="_blank" rel="noreferrer">
                <div className="card">
                    <h2>
                    RAWG Project
                    </h2>
                    <p>Création de site, UX, UI</p>
                </div>
              </a>
        </div>
        <div className="cards">
              <a href="https://nburd01.github.io/react-bloc-notes"target="_blank" rel="noreferrer">
                <div className="card">
                    <h2>
                      Block Notes
                    </h2>
                    <p>Création de site, UX, UI</p>
                </div>
              </a>
        </div>
        <div className="cards">
              <a href="https://google.com"target="_blank" rel="noreferrer">
                <div className="card">
                    <h2>
                      S.C. Le Rheu
                    </h2>
                    <p>Création de site, UX, UI</p>
                </div>
              </a>
        </div>
      </div>
    </div>
  )
}
