import React from "react";
import { Link } from "react-scroll";
import Flag from 'react-world-flags';  // Import the Flag component
import { GrDownload } from "react-icons/gr";
import { useTranslation } from 'react-i18next';  // Import useTranslation from i18next
import "./navbar.scss";

const NavBar = () => {
  const { i18n } = useTranslation();  // Destructure the i18n object from useTranslation

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marwen-Jdidi-CV-DEV.pdf";
    link.download = "Marwen-Jdidi-CV-DEV.pdf";
    link.click();
  };

  // Function to switch language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="cv" onClick={handleDownload}>
          <span>Download CV</span>
          <abbr title="clic here to download CV">
            <GrDownload style={{ fontSize: "20px" }} className="icon" />
          </abbr>
        </div>

        <ul>
          <Link to="skills" smooth={true} duration={500}>
            <li><a href="#skills">Skills</a></li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li><a href="#projects">Projects</a></li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li><a href="#contact">Contact</a></li>
          </Link>
        </ul>
      </div>

      {/* Add the language switcher with flags */}
      <div className="language-switcher">
        <Flag 
          code="FR" 
          style={{ width: "30px", cursor: "pointer" }} 
          onClick={() => changeLanguage('fr')}  // Change to French
        />
        <Flag 
          code="GB" 
          style={{ width: "30px", marginLeft: "10px", cursor: "pointer" }} 
          onClick={() => changeLanguage('en')}  // Change to English
        />
      </div>
    </nav>
  );
};

export default NavBar;



