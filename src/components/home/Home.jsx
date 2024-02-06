import React, { useState } from "react";
import { GrDownload } from "react-icons/gr";
import { FaHandPointLeft } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import Modal from "../modal/Modal";
import About from "../about/About";


import "./home.scss";
import Projects from "../projects/Projects";
import NavBar from "../navbar/NavBar";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Marwen_Jdidi_Resume_Dev_React_JS.pdf";
    link.download = "Marwen_Jdidi_Resume_Dev_React_JS.pdf";
    link.click();
  };

  const [showPlayer, setShowPlayer] = useState(false);
  const videos = [
    {
      id: 1,
      title: "Blog-app",
      src: "https://www.youtube.com/embed/6IyZaA4aD04",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/embed/rG3fQKMPoKg",
    },
    {
      id: 3,
      title: "Job-app",
      src: "https://www.youtube.com/embed/LEU91zAsosg",
    },
    {
      id: 4,
      title: "Video 4",
      src: "https://www.youtube.com/embed/1_PmCTz0fZA",
    },
    {
      id: 5,
      title: "Video 5",
      src: "https://www.youtube.com/embed/-n6lSUpue4A",
    },
  ];

  // const handleClick = (id) => {
  //   setShowPlayer(true);
  //   setVideoId(id);
  // };

  return (
    <div className="home">


      <div className="about">

        <div className="presentation">
          <span> Hey there! I'm</span> -
          <p className="text"> <span className="name">Marwen Jdidi</span>
          </p>

          <p className="text2"> I am a JavaScript/React.
          JS Developer who is passionate about web development.
           I have been self-teaching myself for the past three years and recently
            started a certificate program in JavaScript/ReactJS from OpenClassRooms 
            to further enhance my skills. 
             I am excited to contribute to projects and continue my learning journey in this dynamic field.</p>
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
          {/* <div className="left">
          <h2>Marwen Jdidi</h2>
          <span>React JS developer</span>
          <span className="cv" onClick={handleDownload}>
            Download CV
            <abbr title="clic here to download CV">
              <GrDownload style={{ fontSize: "20px" }} className="icon" />
            </abbr>
          </span>
        </div> */}
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        {/* <div className="items">
          <span className="item">
            <img src="/react.png" alt="" />
            <h5>React.JS </h5>
          </span>

          <span className="item">
            <img src="/javascript.png" alt="" />
            <h5>JavaScript </h5>
          </span>
          <span className="item">
            <img src="/node.png" alt="" />
            <h5>Node.JS</h5>
          </span>

          <span className="item">
            <img src="/mongo.png" alt="" />
            <h5>MongoDB</h5>
          </span>
          <span className="item">
            <img
              src="/MySQL.png"
              style={{
                height: "70px",
                width: "70px",
              }}
            />
            <h5>MySQL</h5>
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
        </div> */}


<div class="skills-container">
  <div class="section frontend">
    <h2>Front-end</h2>
    <div class="skill">
      <img src="/figma.png" alt="Figma icon" />
      <p>Figma</p>
    </div>
    <div class="skill">
      <img src="/css.png" alt="" />
      <p>CSS</p>
    </div>
    <div class="skill">
      <img  src="/scss.png" alt="" />
      <p>SCSS</p>
    </div>
    <div class="skill">
      <img src="/javascript.png" alt="" />
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
      <img src="/MySQL.png" alt="" />
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
          <span onClick={() => setShowModal((prev) => !prev)}>
            {/* clic me to learn more ! <FaHandPointLeft /> */}
          </span>
        </h2>

        <div className="sidepro">
          <div className="proj">
            <Projects />
          </div>

          <div className="demo">
            <p>
              Essayez les applications en utilisant les identifiants de
              démonstration suivants:
            </p>
            <div className="sign">
              <span>e-mail : demo@mail.com</span>
              <span>password : 7xB!*2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <section id="contact">
          <h2>Contact</h2>
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

// {/* <h2>Pourquoi ce portfolio ?</h2>
// <p>
//   Travailler en tant que développeur chez un acteur reconnu du
//   développement application web avec React JS principalement.
// </p>
// <h2>Passion</h2>
// <p>
//   je suis passionné et je souhaiterais mettre mes compétences en pratique au
//   sein d'une structure reconnue. Mon portfolio a été développé pour vous
//   montrer quelques uns de mes projets, mes compétences techniques et le
//   niveau que j'ai pu atteindre. Trés motivé j'ai envie de trouver de
//   nouveaux défis et opportunités pour continuer à progresser dans ce
//   domaine passionnant.
// </p>
// <h2>L 'histoire a commencé depuis ...</h2>
// <p>
//   J'ai commencé à m'intéresser au développement web il y a 2 ans
//   et j'ai décidé de me former en autodidacte. Mes sources d'inspiration
//   étaient des blogs techniques, des forums et des tutoriels en ligne.
//   Chaque soir après le travail et chaque week-end, j'ai consacré du
//   temps à apprendre les bases du développement web et à mettre en
//   pratique ce que j'ai appris en réalisant des projets personnels. Au
//   fil du temps, j'ai développé mes compétences et je suis devenu plus
//   passionné par ce domaine.
// </p> */}

//   <p>
//   Hello, my name is Marwen and I am a self-taught developer. I have been
//   passionate about coding for the past 3 years and have been dedicating
//   my free time to learning and building projects on my own. I started by
//   following tutorials and reading documentation, gradually improving my
//   skills and understanding of various programming languages. Despite the
//   challenges and difficulties I faced, I never gave up and continued to
//   push myself to become a better developer. Today, I am proud to say
//   that I have built multiple projects using React.Js and am constantly
//   looking to improve and expand my knowledge. I am excited to share my
//   journey and projects with you on my portfolio website.
// </p>
