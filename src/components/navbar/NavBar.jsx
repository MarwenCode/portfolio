import React from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import { GrDownload } from "react-icons/gr";

const NavBar = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marwen_Jdidi_Resume_Dev_React_JS.pdf";
    link.download = "Marwen_Jdidi_Resume_Dev_React_JS.pdf";
    link.click();
  };
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <a href="#">
      
          <img src="/portfolio.png" />
        </a>
      </div> */}
      <div className="navbar-menu">
      <div className="cv" onClick={handleDownload}>
           <span>Download CV</span> 
            <abbr title="clic here to download CV">
              <GrDownload style={{ fontSize: "20px" }} className="icon" />
            </abbr>
          </div>
        <ul>
          {/* <Link to="home" smooth={true} duration={500}>
            <li>
              <a href="#about">My Story</a>
            </li>
          </Link> */}
          <Link to="skills" smooth={true} duration={500}>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </Link>

        </ul>

        
     

      
      </div>
    </nav>
  );
};

export default NavBar;
