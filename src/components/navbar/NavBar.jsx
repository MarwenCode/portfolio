import React, { useState } from "react";
import { Link } from "react-scroll";
import Flag from 'react-world-flags';
import { GrDownload } from "react-icons/gr";
import { useTranslation } from 'react-i18next';
import "./navbar.scss";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marwen-Jdidi-CV_DEV.pdf";
    link.download = "Marwen-Jdidi-CV_DEV.pdf";
    link.click();
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        {/* <div className="cv" onClick={handleDownload}>
          <span>Download CV</span>
          <abbr title="clic here to download CV">
            <GrDownload style={{ fontSize: "20px" }} className="icon" />
          </abbr>
        </div> */}

        <div className="burger-menu" onClick={toggleMenu}>
          ☰
        </div>

        {isMenuOpen && (
          <ul className="mobile-menu">
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
        )}

        <ul className="desktop-menu">
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

      <div className="language-switcher">
        <Flag
          code="FR"
          style={{ width: "30px", cursor: "pointer" }}
          onClick={() => changeLanguage('fr')}
        />
        <Flag
          code="GB"
          style={{ width: "30px", marginLeft: "10px", cursor: "pointer" }}
          onClick={() => changeLanguage('en')}
        />
      </div>
    </nav>
  );
};

export default NavBar;
