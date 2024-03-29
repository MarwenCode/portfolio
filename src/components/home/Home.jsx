import React, { useState, useEffect } from "react";

import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

import "./home.scss";
import Projects from "../projects/Projects";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

  const [isSkillsVisible, setIsSkillsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
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
      console.log("Form data submitted:", formData);
  
      const form = e.target;  // Get the form element
  
      const result = await emailjs.sendForm(
        'service_v0gmsdf',
        'template_g73cyy8',
        form,
        'tGn9UVohsbbE7IH5z'
      );
  
      console.log(result.text);
      // Add any success handling or redirect here
        // Show a success notification to the user
        toast.success("Your message has been sent!");
        setFormData({
          name: '',
          email: '',
          message: '',
        });
       
       
    } catch (error) {
      console.error(error);  // Log the entire error object for further investigation
      console.log(error?.text || 'An error occurred');
        // Show an error notification to the user
        toast.error("An error occurred. Please try again.");
    }
  };
  
  
  
 

  return (
    <div className="home">
      <div className="about">
        <div className="presentation">
          <span> Hey there! I'm</span>
          <p className="text">
            <span className="name">Marwen Jdidi</span>
          </p>
          <p className="text2">
            a JavaScript/React. JS Developer who is passionate about web
            development. I have been self-teaching myself for the past three
            years and recently started a certificate program in
            JavaScript/ReactJS from OpenClassRooms to further enhance my skills.
            I am excited to contribute to projects and continue my learning
            journey in this dynamic field.
          </p>
          <div className="contact">
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/marwen-dev-react-js">
                <FaLinkedin size={32} />
              </a>
              <a href="https://twitter.com/MarwenCode">
                <FaTwitter size={32} />
              </a>
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
            <img src="/profile-pic1.png" alt="profile-pic" />
          </div>
        </div>
      </div>
      <div className={`skills ${isSkillsVisible ? "visible" : ""}`} id="skills-section">
        <h2>Skills</h2>

        <div class="skills-container">
          <div class="section frontend">
            <h2>Front-end</h2>
            <div class="skill">
              <img src="/figma3.png" alt="Figma icon" />
              <p>Figma</p>
            </div>
            <div class="skill">
              <img src="/css.png" alt="" />
              <p>CSS</p>
            </div>
            <div class="skill">
              <img src="/sass.svg" alt="" />
              <p>SCSS</p>
            </div>
            <div class="skill">
              <img src="/javascript.svg" alt="" />
              <p>JavaScript</p>
            </div>
            <div class="skill">
              <img src="/react.png" alt="" />
              <p>React.JS</p>
            </div>
          </div>
          <div class="section backend">
            <h2>Back-end</h2>
            <div class="skill">
              <img src="/mongo.png" alt="" />
              <p>MongoDB</p>
            </div>
            <div class="skill">
              <img src="/mysql.svg" alt="" />
              <p>MySQL</p>
            </div>
            <div class="skill">
              <img src="/node.png" alt="" />
              <p>Node.JS</p>
            </div>
          </div>

          <div class="section other">
            <h2>Other</h2>
            <div class="skill">
              <img src="/github.png" alt="Git & GitHub icon" />
              <p>Git & GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>
          Side Projects
       
        </h2>

        <div className="sidepro">
          <div className="proj">
            <Projects />
          </div>

          {/* <div className="demo">
            <p>
              Essayez les applications en utilisant les identifiants de
              démonstration suivants:
            </p>
            <div className="sign">
              <span>e-mail : demo@mail.com</span>
              <span>password : 7xB!*2</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="contact">
        <section id="contact">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="email">Email:</label>
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
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <ToastContainer />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/marwen-dev-react-js">
              <FaLinkedin size={32} />
            </a>
            <a href="https://twitter.com/MarwenCode">
              <FaTwitter size={32} />
            </a>
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
