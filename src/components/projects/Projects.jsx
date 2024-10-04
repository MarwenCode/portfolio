import React, { useState } from "react";
import Project from "./Project";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Importer useTranslation

import "./projects.scss";

const Projects = () => {
  const { t } = useTranslation(); // Hook pour accéder à la fonction de traduction
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const videos = [
    {
      title: t('projects.socialMedia.title'), // Traduction du titre
      src: "https://www.youtube.com/watch?v=sHX3hq0bfZQ",
      description: t('projects.socialMedia.description'), // Traduction de la description
      image: "/postshare.png",
      code: "https://github.com/MarwenCode/Post-Share",
      app: "https://postshare-app.onrender.com",
    },
    {
      title: t('projects.notesChatApp.title'), // Traduction du titre
      src: "https://www.youtube.com/watch?v=uFReP-cA2CQ",
      description: t('projects.notesChatApp.description'), // Traduction de la description
      image: "/notes-app.png",
      code: "https://github.com/MarwenCode/MIND-3",
      app: "https://marwen-portfolio.onrender.com"
    },
    {
      title: t('projects.eCommerceApp.title'), // Traduction du titre
      src: "https://www.youtube.com/watch?v=1_PmCTz0fZA",
      description: t('projects.eCommerceApp.description'), // Traduction de la description
      image: "/e-commerce.png",
      code: "https://github.com/MarwenCode/E-commerce-app",
      app: "https://e-commerce-app-7nc0.onrender.com",
    },
    {
      title: t('projects.dashboardApp.title'), // Traduction du titre
      src: "https://www.youtube.com/watch?v=-n6lSUpue4A",
      description: t('projects.dashboardApp.description'), // Traduction de la description
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

