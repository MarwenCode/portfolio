import React, { useState } from "react";
import "./projects.scss";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const videos = [
    {
      title: "Blog-app",
      src: "https://www.youtube.com/watch?v=6IyZaA4aD04",
      description:
        "A dynamic platform for creative expression! As a ReactJS developer, I utilized the MERN stack and Context API to bring this project to life. With features like authentication, the API.",
      image: "/blog.png",
      code:"https://github.com/MarwenCode/Blog-app",
      app:"https://blog-app-frontend.onrender.com",
    },
    {
      title: "Social-Media",
      src: "https://www.youtube.com/watch?v=rG3fQKMPoKg",
      description:
        "A dynamic platform for creative expression! As a ReactJS developer, I utilized the MERN stack and Context API to bring this project to life. With features like authentication, the API.",
      image: "/social-media.png",
      code:"https://github.com/MarwenCode/SocialMedia.app",
      app:"https://social-media-app-a6lq.onrender.com"
    },
    {
      title: "Job-app",
      src: "https://www.youtube.com/watch?v=LEU91zAsosg",
      description:
        "A dynamic platform for creative expression! As a ReactJS developer, I utilized the MERN stack and Context API to bring this project to life. With features like authentication, the API.",
      image: "/job-app.png",
      code:"https://github.com/MarwenCode/Job-app",
      app:"https://job-app-client.onrender.com"
    },
    {
      title: "E-Commerce-app",
      src: "https://www.youtube.com/watch?v=1_PmCTz0fZA",
      description:
        "A dynamic platform for creative expression! As a ReactJS developer, I utilized the MERN stack and Context API to bring this project to life. With features like authentication, the API.",
      image: "/e-commerce.png",
      code:"https://github.com/MarwenCode/E-commerce-app",
      app:"https://e-commerce-app-7nc0.onrender.com",
    },
    {
      title: "Dashboard-app",
      src: "https://www.youtube.com/watch?v=-n6lSUpue4A",
      description:
        "A dynamic platform for creative expression! As a ReactJS developer, I utilized the MERN stack and Context API to bring this project to life. With features like authentication, the API.",
      image: "/dashboard.png",
      code:"https://github.com/MarwenCode/Dashboard-admin-app",
      app:"https://dashboard-app-marwen.onrender.com"
    },
  ];

  const handleClick = (videoId) => {
    setSelectedVideo(videoId)
    setShowPlayer(!showPlayer)
  }



  return (
    <div className="sideprojects">
      {videos.map((video) => (
        <div className="project">
          <div className="hover">
            <span>{video.description}</span>
          </div>
          <div className="top">
            <span>{video.title}</span>
            <img src={video.image} />
          </div>
          <div className="links">
            <span>
              <a href={video.code}>Code</a>
            </span>
            <span>
              <a href={video.app}>App</a>
            </span>
            <span>
              <a  className="video" onClick={() => handleClick(video.src)}>Demo</a>
            </span>
          </div>
          {showPlayer && (
               <div className="video-container">
               { selectedVideo  === video.src && (
              
                 <>
                   <button onClick={() =>setShowPlayer(false)}>
                     X
                   </button>
                   <iframe
                     width="560"
                     height="315"
                     src={`https://www.youtube.com/embed/${
                       video.src.split("v=")[1]
                     }`}
                     frameborder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen
                     className="iframe"
                   />
                 </>
               )}
             </div>



          )


          }
       
        </div>
      ))}
    </div>
  );
};

export default Projects;
