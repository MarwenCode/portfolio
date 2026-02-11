import React, { useState } from "react";
import { Link } from "react-scroll";
import Flag from "react-world-flags";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./navbar.scss";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <span className="brand">
          <span className="brand-icon">
            <FaCode />
          </span>
          <span className="brand-text">MarwenCode</span>
        </span>

        <button
          className="burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <ul className="mobile-menu">
            <Link to="skills" smooth duration={500} onClick={toggleMenu}>
              <li>Skills</li>
            </Link>
            <Link to="projects" smooth duration={500} onClick={toggleMenu}>
              <li>Projects</li>
            </Link>
            <Link to="contact" smooth duration={500} onClick={toggleMenu}>
              <li>Contact</li>
            </Link>
          </ul>
        )}

        <ul className="desktop-menu">
          <Link to="skills" smooth duration={500}>
            <li>Skills</li>
          </Link>
          <Link to="projects" smooth duration={500}>
            <li>Projects</li>
          </Link>
          <Link to="contact" smooth duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="language-switcher">
        <Flag
          code="FR"
          style={{ width: "28px", cursor: "pointer" }}
          onClick={() => changeLanguage("fr")}
        />
        <Flag
          code="GB"
          style={{ width: "28px", marginLeft: "10px", cursor: "pointer" }}
          onClick={() => changeLanguage("en")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
