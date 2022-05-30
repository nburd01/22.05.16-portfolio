import React from 'react'
import './Navbar.css'
import {Link, Outlet} from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Niall Burdon</h1>
      </div>
      <div className="links">
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/tech'>Tech </Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
    <Outlet />
      </div>
    </div>
  )
}
