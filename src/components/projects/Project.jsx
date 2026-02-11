import React, { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./projects.scss";

const Project = ({ video, className = "" }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });

  // Animate the project when it comes into view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const handleClick = (videoId) => {
    setSelectedVideo(videoId);
    setShowPlayer(!showPlayer);
  };

  return (
    <motion.div
      className={`project ${className}`.trim()}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className="top" style={{position: 'relative'}}>
        <span>{video.title}</span>
        <div className="hover">
          <span>{video.description}</span>
        </div>
        <img src={video.image} alt={video.title} />
      </div>
      <div className="links">
        <span className={video.code ? "" : "is-disabled"}>
          {video.code ? <a href={video.code}>Code</a> : "Code (Soon)"}
        </span>
        <span className={video.app ? "" : "is-disabled"}>
          {video.app ? <a href={video.app}>App</a> : "App (Soon)"}
        </span>
        <span className={video.src ? "" : "is-disabled"}>
          {video.src ? (
            <button className="video" type="button" onClick={() => handleClick(video.src)}>
              Demo
            </button>
          ) : (
            "Demo (Soon)"
          )}
        </span>
      </div>
      {showPlayer && (
        <div className="video-container">
          {selectedVideo === video.src && (
            <>
              <button  style={{color:'red'}}   onClick={() => setShowPlayer(false)}>X</button>
              <iframe
                title={video.title}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.src.split("v=")[1]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="iframe"
              />
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Project;
