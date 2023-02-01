import React, { useState } from "react";
import { GrDownload } from "react-icons/gr";
import {FaHandPointLeft} from "react-icons/fa"
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import Modal from "../modal/Modal";

import "./home.scss";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/dev-cv.pdf";
    link.download = "dev-cv.pdf";
    link.click();
  };

  return (
    <div className="home">
      <div className="header">
        <div className="right">
          <img src="/photo-profile.png" />
        </div>
        <div className="left">
          <h2>Marwen Jdidi</h2>
          <span>React JS developer</span>
          {/* <span className="cv" onClick={handleDownload}> */}
          <span className="cv" >
            Download CV
            <abbr title="clic here to download CV">
              <GrDownload style={{ fontSize: "20px" }} className="icon" />
            </abbr>
          </span>
        </div>
      </div>

      <div className="about">
        <h2>My story</h2>
        <p>
          Hello, my name is Marwen and I am a self-taught developer. I have been
          passionate about coding for the past 2 years and have been dedicating
          my free time to learning and building projects on my own. I started by
          following tutorials and reading documentation, gradually improving my
          skills and understanding of various programming languages. Despite the
          challenges and difficulties I faced, I never gave up and continued to
          push myself to become a better developer. Today, I am proud to say
          that I have built multiple projects using React.Js and am constantly
          looking to improve and expand my knowledge. I am excited to share my
          journey and projects with you on my portfolio website.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="items">
          <span className="item">
            <img src="/react.png" />
            <h5>React.JS </h5>
          </span>

          <span className="item">
            <img src="/javascript.png" />
            <h5>JavaScript </h5>
          </span>
          <span className="item">
            <img src="/node.png" />
            <h5>Node.JS</h5>
          </span>

          <span className="item">
            <img src="/mongo.png" />
            <h5>MongoDB</h5>
          </span>
          <span className="item">
            <img src="/css.png" style={{ marginLeft: "-20px" }} />
            <h5>CSS </h5>
          </span>
          <span className="item">
            <img
              src="/scss.png"
              style={{ width: "110px", marginLeft: "-20px" }}
            />
            <h5>SASS</h5>
          </span>
          <span className="item">
            <img
              src="/github.png"
              style={{
                width: "70px",
                background: "black",
                // marginLeft: "10px",
              }}
            />
            <h5>Github</h5>
          </span>
        </div>
      </div>
      <div className="projects">
        <h2>
          Projects
          <span onClick={() => setShowModal((prev) => !prev)}>
        
            clic me to learn more ! <FaHandPointLeft />
          </span>
        </h2>

        {showModal && <Modal setShowModal={setShowModal} />}

        <div className="sideprojects">
          <div className="project">
            <div className="top">
              <span>Blog-app</span>
              <img src="/blog.png" />
            </div>

            <div className="links">
          
              <span><a href="https://github.com/MarwenCode/Blog-app">Code</a></span>
              <span>Demo</span>
              <span><a href="https://blog-app-frontend.onrender.com">App</a></span>
            </div>
          </div>
          <div className="project">
            <div className="top">
              <span>Social-Media</span>
              <img src="/social-media.png" />
             

            </div>
            <div className="links">
            <span><a href="https://github.com/MarwenCode/SocialMedia.app">Code</a></span>
              <span><a href="https://www.youtube.com/watch?v=rG3fQKMPoKg&t=184s">Demo</a></span>
              <span><a href="https://social-media-app-a6lq.onrender.com">App</a></span>
            </div>
          </div>
          <div className="project">
            <div className="top">
              <span>Job-app</span>
              <img src="/job-app.png" />
            </div>
            <div className="links">
            <span><a href="https://github.com/MarwenCode/Job-app">Code</a></span>
              <span>Demo</span>
              <span><a href="https://job-app-client.onrender.com">App</a></span>
            </div>
          </div>
          <div className="project">
            <div className="top">
              <span>E-Commerce</span>
              <img src="/e-commerce.png" />
            </div>
            <div className="links">
            <span><a href="https://github.com/MarwenCode/E-commerce-app">Code</a></span>
              <span>Demo</span>
              <span><a href="https://e-commerce-app-7nc0.onrender.com">App</a></span>
            </div>
          </div>
          <div className="project">
            <div className="top">
              <span>Dashboard</span>
              <img src="/dashboard.png" />
            </div>
            <div className="links">
            <span><a href="https://github.com/MarwenCode/Dashboard-admin-app">Code</a></span>
                 <span><a href="https://www.youtube.com/watch?v=-n6lSUpue4A">Demo</a></span>
              <span><a href="https://dashboard-app-marwen.onrender.com">App</a></span>
            </div>
          </div>
          <div className="demo">
            <p>To try the apps, please use the demo credentials:</p>
            <div className="sign">
            <span>e-email : demo@mail.com</span>
            <span>password : 7xB!*2</span>

            </div>
           
          </div>
        </div>
      </div>
      <div className="contact">
        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/marwen-jdidi-69668344">
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
      {/* <div className="bubbles">
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />
        <img  src="/bubble.png" />

      </div> */}
    </div>
  );
};

export default Home;
