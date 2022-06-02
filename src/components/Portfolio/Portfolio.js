import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="container-large portfolio" id="portfolio">
        <div className="title-div">
            <span>
                <h3>Portfolio</h3>
            </span>
        </div>
        <div className="paragraph-div">
            <p>I also like to get funky! Here are some projects that I've done in the past</p>
        </div>
        <div className="cards">
          <div className="card">
            <h2>
              S.C. Le Rheu
            </h2>
            <p>Création de site, UX, UI</p>
          </div>
          <div className="card">
            <h2>
              S.C. Le Rheu
            </h2>
            <p>Création de site, UX, UI</p>
          </div>
          <div className="card">
            <h2>
              S.C. Le Rheu
            </h2>
            <p>Création de site, UX, UI</p>
          </div>
          <div className="card">
            <h2>
              S.C. Le Rheu
            </h2>
            <p>Création de site, UX, UI</p>
          </div>
        </div>

    </div>
  )
}
