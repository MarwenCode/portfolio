import React, { useState } from "react";
import {GrDownload} from 'react-icons/gr'
import "./home.scss";

const Home = () => {


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/dev-cv.pdf';
        link.download = 'dev-cv.pdf';
        link.click();
    }





  return (
    <div className="home">
      <div className="header">
        <div className="right">
          <img src="/photo-profile.png" />
        </div>
        <div className="left">
          <h2>Marwen Jdidi</h2>
          <span>React JS developer</span>
          <span  className="cv" onClick={handleDownload}>
        
            Download CV
            <abbr title="clic here to download CV"><GrDownload  style={{fontSize:"20px"}}/></abbr>
            
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
          journey and projects with you on my portfolio website
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
            <img src="/css.png" style={{  marginLeft :"-20px" }} />
           <h5>CSS </h5> 
          </span>
          <span className="item" >
            <img src="/scss.png" style={{ width: "110px", marginLeft :"-20px" }}   />
            <h5>SASS</h5> 
          </span>
          <span className="item"     >
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
        <h2>Projects</h2>
        <div className="sideprojects">
        <div className="project1">
            <div className="top">
            <span>Blog-app</span>
            <img   src="/logo512.png"  />

            </div>
          
            <div className="links">
                <span>Code</span>
                <span>Demo</span>
                <span>app</span>
            </div>

        </div>
        <div className="project2">Social-media</div>
        <div className="project3">Job-app</div>
        <div className="project4">E-commerce</div>
        <div className="project5">Dashboard</div>


        </div>

   
      </div>
      <div className="contact">contact</div>
    </div>
  );
};

export default Home;
