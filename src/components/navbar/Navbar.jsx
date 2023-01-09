import React from 'react'
import logo from '../assets/logo.svg';
import './navbar.css'

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#Projects">Add Project</a></p>
          <p><a href="#AddClient">Add client</a></p>
          <p><a href="#timesheet">Timesheet</a></p>
          <p><a href="#shifhours">Shift hours</a></p>
          <p><a href="#help">help</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar