import React from 'react';
import { Link } from "react-scroll";
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#"><img  src="/portfolio.png" /></a>
      </div>
      <div className="navbar-menu">
        <ul>
        <Link to='home' smooth={true} duration={500}>
          <li><a href="#about">My Story</a></li>
          </Link>
        <Link to='projects' smooth={true} duration={500}>
        <li><a href="#projects">Projects</a></li>
          </Link>
        <Link to='skills' smooth={true} duration={500}>
        <li><a href="#skills">Skills</a></li>
          </Link>
        <Link to='contact' smooth={true} duration={500}>
         
        <li><a href="#contact">Contact</a></li>
          </Link>
         
         
        </ul>
      </div>
    </nav>
  )
}

export default NavBar