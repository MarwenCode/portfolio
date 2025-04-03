import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import "./home.scss";
import Projects from "../projects/Projects";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JavaScriptOnly from "../javaScriptOnly/JavaScriptOnly";
import Intro from "../intro/Intro";

const Home = () => {
  const { t } = useTranslation();
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
        setIsSkillsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = e.target;

      const result = await emailjs.sendForm(
        "service_v0gmsdf",
        "template_g73cyy8",
        form,
        "tGn9UVohsbbE7IH5z"
      );

      toast.success("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleMouseEnter = () => {
    setIsIntroVisible(true);
  };

  const handleMouseLeave = () => {
    setIsIntroVisible(false);
  };

  return (
    <div className="home">
      <div className="about">
        <div className="presentation">
          <span>{t('about.greeting')}</span> 
          <p className="text">
            <span className="name">Marwen Jdidi</span>
          </p>
          <p className="text2">
            {t('about.description')} 
          </p>
          <div className="contact">
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/marwen-dev-react-js">
                <FaLinkedin size={32} />
              </a>
              {/* <a href="https://twitter.com/MarwenCode">
                <FaTwitter size={32} />
              </a> */}
              <a href="mailto:marwen.jdidi75@gmail.com">
                <FaEnvelope size={32} />
              </a>
              <a href="https://github.com/MarwenCode">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="profile">
          <div className="right">
            <img
              src="/profile image.jpg"
              alt="profile-pic"
              className="profile-pic"
            />
          </div>
          {isIntroVisible && <Intro />}
        </div>
      </div>

      <div className={`skills ${isSkillsVisible ? "visible" : ""}`} id="skills-section">
        <h2>{t('skills.title')}</h2>  

        <div className="skills-container">
          <div className="section frontend">
            <h2>{t('skills.frontend')}</h2> 
            <div className="skill">
              <img src="/figma3.png" alt="Figma icon" />
              <p>{t('skills.figma')}</p> 
            </div>
            <div className="skill">
              <img src="/css.png" alt="" />
              <p>{t('skills.css')}</p> 
            </div>
            <div className="skill">
              <img src="/sass.svg" alt="" />
              <p>{t('skills.scss')}</p> 
            </div>
            <div className="skill">
              <img src="/javascript.svg" alt="" />
              <p>{t('skills.javascript')}</p> 
            </div>
            <div className="skill">
              <img src="/react.png" alt="" />
              <p>{t('skills.react')}</p> 
            </div>
          </div>

          <div className="section backend">
            <h2>{t('skills.backend')}</h2>
            <div className="skill">
              <img src="/mongo.png" alt="" />
              <p>{t('skills.mongodb')}</p>
            </div>
            <div className="skill">
              <img src="/mysql.svg" alt="" />
              <p>{t('skills.mysql')}</p> 
            </div>
            <div className="skill">
              <img src="/node.png" alt="" />
              <p>{t('skills.node')}</p> 
            </div>
          </div>

          <div className="section other">
            <h2>{t('skills.other')}</h2> 
            <div className="skill">
              <img src="/github.png" alt="Git & GitHub icon" />
              <p>{t('skills.github')}</p> 
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <h2>{t('projects.title')}</h2> 
        <div className="sidepro">
          <div className="proj">
            <Projects />
          </div>

          <div className="demo">
            <p>{t('projects.credentials')}</p> 
            <div className="sign">
              <span>{t('projects.email')}: admin@gmail.com</span> 
              <span>{t('projects.password')}: 123456</span> 
              <p>{t('projects.note')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="jsOnly">
        <JavaScriptOnly />
      </div>

      <div className="contact">
        <section id="contact">
          <h2>{t('contact.title')}</h2> 
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}:</label> 
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}:</label> 
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">{t('contact.submit')}</button> 
          </form>
          <ToastContainer />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/marwen-dev-react-js">
              <FaLinkedin size={32} />
            </a>
            {/* <a href="https://twitter.com/MarwenCode">
              <FaTwitter size={32} />
            </a> */}
            <a href="mailto:marwen.jdidi75@gmail.com">
              <FaEnvelope size={32} />
            </a>
            <a href="https://github.com/MarwenCode">
              <FaGithub size={32} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
