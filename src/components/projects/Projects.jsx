import React, { useState, useRef } from "react";
import Project from "./Project";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Importer useTranslation

import "./projects.scss";

const Projects = () => {
  const { t } = useTranslation(); // Hook pour accéder à la fonction de traduction
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const videos = [
    {
      title: t('projects.stepsApp.title'),
      description: t('projects.stepsApp.description'),
      image: "/STEPS.png",
      app: "https://steps-app-txuu.onrender.com"
    },
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

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const child = containerRef.current.children[index];
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  // Scroll to current index on mount or index change
  React.useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div style={{ position: 'relative' }}>
      <button className="carousel-arrow left" onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
      <div className="sideprojects" ref={containerRef}>
        {videos.map((video, index) => (
          <Project key={index} video={video} />
        ))}
      </div>
      <button className="carousel-arrow right" onClick={handleNext} disabled={currentIndex === videos.length - 1}>&gt;</button>
    </div>
  );
};

export default Projects;

