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
        "L'application Notes permet aux utilisateurs de créer des notes avec des fonctionnalités avancées telles que l'enregistrement des notes en base de données MySQL, l'édition et la suppression de notes, ainsi que l'attribution de chaque note à une catégorie. Cette application est réalisée avec React JS, MySQL et Express JS. Les prochaines fonctionnalités incluent l'ajout d'un système de chat avec les utilisateurs en utilisant Socket.io et la création d'un gestionnaire de tâches similaire à Trello..",
      image: "/notes-app.png",
      code: "https://github.com/MarwenCode/MIND-3",
      app:"https://marwen-portfolio.onrender.com"
    },
    
    {
      title: "E-Commerce-app",
      src: "https://www.youtube.com/watch?v=1_PmCTz0fZA",
      description:
        "J'ai conçu ce site e-commerce pour renforcer mes compétences en matière de Hooks de React JS, en particulier useContext et useReducer. Ceux-ci ont permis une gestion efficace du panier d'achats, en suivant les quantités et les totaux des commandes en temps réel lorsque les utilisateurs ajoutent des articles.",
      image: "/e-commerce.png",
      code: "https://github.com/MarwenCode/E-commerce-app",
      app: "https://e-commerce-app-7nc0.onrender.com",
    },
    {
      title: "Dashboard-app",
      src: "https://www.youtube.com/watch?v=-n6lSUpue4A",
      description:
        "J'ai développé ce tableau de bord en utilisant Express JS, MongoDB et React JS afin de mieux maîtriser la gestion de la base de données et d'afficher les données à l'aide de Context API. J'ai également implémenté des fonctionnalités permettant de gérer efficacement les différents states de l'application. l'utilisateur a la possibilité de gérer facilement les produits en stock et de communiquer avec les fournisseurs à l'aide d'un système de tickets de support intégré, permettant une gestion plus efficace de ses activités.",
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
