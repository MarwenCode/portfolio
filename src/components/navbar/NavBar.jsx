import React from 'react'
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">My Portfolio</a>
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#about">My Story</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar