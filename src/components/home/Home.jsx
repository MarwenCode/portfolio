import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="right">
          <img src="/photo-profile.png" />
        </div>
        <div className="left">
          <h2>Marwen Jdidi</h2>
          <span>React JS developer</span>
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
          journey and projects with you on my portfolio website
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="items">
          <span className="item">
            <img src="/react.png" />
            React.JS
          </span>

          <span className="item">
            <img src="/javascript.png" />
            JavaScript
          </span>
          <span className="item">
            <img src="/node.png" />
            Node.JS
          </span>

          <span className="item">
            <img src="/mongo.png" />
            MongoDB
          </span>
          <span className="item">
            <img src="/css.png" />
            CSS
          </span>
          <span className="item" >
            <img src="/scss.png" style={{ width: "110px" }}   />
            {/* <br /> */}
            SASS
          </span>
          <span className="item"   style={{marginLeft: "10px"}}  >
            <img
              src="/github.png"
              style={{
                width: "70px",
                background: "black",
                // marginLeft: "10px",
              }}
            />
            Github
          </span>
        </div>
      </div>
      <div className="projects">
        <div className="project1">blog</div>
        <div className="project1">Social-media</div>
        <div className="project1">Job-app</div>
        <div className="project1">E-commerce</div>
        <div className="project1">Dashboard</div>
      </div>
      <div className="contact">contact</div>
    </div>
  );
};

export default Home;
