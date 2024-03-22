import React, { useState } from "react";
import Project from "./Project";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import "./projects.scss";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const videos = [
    // {
    //   title: "Blog-app",
    //   src: "https://www.youtube.com/watch?v=6IyZaA4aD04",
    //   description:
    //     " I developed the blog-app application to gain a solid understanding of the fundamentals of REACT JS.- My goal was to create a CRUD (create, read, update, and delete) application to put my knowledge into practice.Technologies used: React JS, hooks, MongoDB for the backend" ,
    //   image: "/blog.png",
    //   code: "https://github.com/MarwenCode/Blog-app",
    //   app: "https://blog-app-frontend.onrender.com",

    // },
    // {
    //   title: "Social-Media",
    //   src: "https://www.youtube.com/watch?v=sHX3hq0bfZQ",
    //   description:
    //     "I developed a RESTful API for managing posts, incorporating features such as image uploads, comment editing, and deletion. I proficiently navigated the React ecosystem, employing techniques like the spread operator, conditional rendering, and state management with Redux Toolkit.",
    //   image: "/social-media.png",
    //   code: "https://github.com/MarwenCode/SocialMedia.app",
    //   app: "https://social-media-app-a6lq.onrender.com",
    // },
    // {
    //   title: "Job-app",
    //   src: "https://www.youtube.com/watch?v=LEU91zAsosg",
    //   description:
    //     "Cette application permet de faciliter la recherche d'offres d'emploi pour les développeurs en se concentrant sur leurs spécialités. En utilisant cette application, j'ai amélioré mes compétences en matière de gestion des états avec React JS,  j'ai également appris à effectuer des filtrages de données pour afficher des résultats en fonction de critères prédéterminés et de maîtriser les opérations CRUD.",
    //   image: "/job-app.png",
    //   code: "https://github.com/MarwenCode/Job-app",
    //   app: "https://job-app-client.onrender.com",
    // },


     {
        title: "Social-Media",
         src: "https://www.youtube.com/watch?v=sHX3hq0bfZQ",
       description:
          "I developed a RESTful API for managing posts, incorporating features such as image uploads, comment editing, and deletion. I proficiently navigated the React ecosystem, employing techniques like the spread operator, conditional rendering, and state management with Redux Toolkit.",
       image: "/postshare.png",
       code: "https://github.com/MarwenCode/Post-Share",
       app: "https://postshare-app.onrender.com/login",
    },
    {
      title: "Notes-Chat-app (en cours )",
      src: "https://www.youtube.com/watch?v=uFReP-cA2CQ",
      description:
      "The Notes application allows users to create notes with advanced features such as saving notes in a MySQL database, editing and deleting notes, as well as assigning each note to a category. This application is built with React JS, MySQL, and Express JS. The upcoming features include adding a chat system with users using Socket.io and creating a task manager similar to Trello.",
      image: "/notes-app.png",
      code: "https://github.com/MarwenCode/MIND-3",
      app:"https://marwen-portfolio.onrender.com"
    },
    
    {
      title: "E-Commerce-app",
      src: "https://www.youtube.com/watch?v=1_PmCTz0fZA",
      description:
      "I designed this e-commerce website to enhance my skills in React JS Hooks, particularly useContext and useReducer. These facilitated efficient management of the shopping cart, tracking quantities and order totals in real-time as users add items.",
      image: "/e-commerce.png",
      code: "https://github.com/MarwenCode/E-commerce-app",
      app: "https://e-commerce-app-7nc0.onrender.com",
    },
    {
      title: "Dashboard-app",
      src: "https://www.youtube.com/watch?v=-n6lSUpue4A",
      description:
      "I developed this dashboard using Express JS, MongoDB, and React JS to better master database management and display data using the Context API. I also implemented features to efficiently handle various application states. Users can easily manage products in stock and communicate with suppliers using an integrated support ticket system, enabling more effective management of their activities.",
      image: "/dashboard.png",
      code: "https://github.com/MarwenCode/Dashboard-admin-app",
      app: "https://dashboard-app-marwen.onrender.com",
    },
  
  ];

  const handleClick = (videoId) => {
    setSelectedVideo(videoId);
    setShowPlayer(!showPlayer);
  };









  return (
    <div className="sideprojects">
      {videos.map((video, index) => (
        <Project key={index} video={video} />
      ))}
    </div>
  );
};

export default Projects;
