import React from "react";
import Project from "./Project";
import { useTranslation } from "react-i18next";
import "./projects.scss";

const Projects = () => {
  const { t } = useTranslation();

  const videos = [
    {
      title: t("projects.openTaskHub.title"),
      description: t("projects.openTaskHub.description"),
      image: "/openTaskHub-pic1.png",
      app: "https://opentaskhub-frontend.onrender.com/login",
    },
    {
      title: t("projects.stepsApp.title"),
      description: t("projects.stepsApp.description"),
      image: "/STEPS.png",
      app: "https://steps-app-txuu.onrender.com",
    },
    {
      title: t("projects.socialMedia.title"),
      src: "https://www.youtube.com/watch?v=sHX3hq0bfZQ",
      description: t("projects.socialMedia.description"),
      image: "/postshare.png",
      code: "https://github.com/MarwenCode/Post-Share",
      app: "https://postshare-app.onrender.com",
    },
    {
      title: t("projects.notesChatApp.title"),
      src: "https://www.youtube.com/watch?v=uFReP-cA2CQ",
      description: t("projects.notesChatApp.description"),
      image: "/notes-app.png",
      code: "https://github.com/MarwenCode/MIND-3",
      app: "https://marwen-portfolio.onrender.com",
    },
    {
      title: t("projects.eCommerceApp.title"),
      src: "https://www.youtube.com/watch?v=1_PmCTz0fZA",
      description: t("projects.eCommerceApp.description"),
      image: "/e-commerce.png",
      code: "https://github.com/MarwenCode/E-commerce-app",
      app: "https://e-commerce-app-7nc0.onrender.com",
    },
    {
      title: t("projects.dashboardApp.title"),
      src: "https://www.youtube.com/watch?v=-n6lSUpue4A",
      description: t("projects.dashboardApp.description"),
      image: "/dashboard.png",
      code: "https://github.com/MarwenCode/Dashboard-admin-app",
      app: "https://dashboard-app-marwen.onrender.com",
    },
  ];

  const featured = videos.slice(0, 2);
  const others = videos.slice(2);

  return (
    <div className="projects-layout">
      <div className="featured-projects">
        {featured.map((video, index) => (
          <Project key={`featured-${index}`} video={video} className="featured-card" />
        ))}
      </div>

      <div className="sideprojects">
        {others.map((video, index) => (
          <Project key={`other-${index}`} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
