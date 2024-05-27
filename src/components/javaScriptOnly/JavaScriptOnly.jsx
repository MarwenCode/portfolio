import React, { useState } from 'react';
import "./javascriptonly.scss";
import { FaArrowDown } from 'react-icons/fa';

const JavaScriptOnly = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  const projets = [
    {
      title: "Oh My Food",
      description: "The project emphasizes front-end development skills, particularly in HTML, CSS, and responsive design, enabling learners to Create a visually appealing and user-friendly interface using HTML and CSS.  Ensure the website adapts seamlessly to different screen sizes using responsive design techniques.",
      images: ["myfood2.png", "myfood1.png", "myfood4.png", "myfood5.png"],
      imageBasic: "myfood4.png",
      technology: "html,css, responsive design",
      url: "https://oh-my-food-marwen.netlify.app"
    },

    {
      title: "GameOn",
      description: "Form Validation: Implemented algorithms using JavaScript to validate user input during subscription. This ensures data accuracy and prevents invalid submissions. Error Handling: Designed error messages to provide clear and informative feedback to users in case of invalid form entries.Responsive Design.",
      images: ["game1.png", "game2.png","game3.png"],
      imageBasic: "game1.png",
      technology: "html,scss, Javascript, responsive",
      url: "https://gameon-marwen.netlify.app"
    },
    {
      title: "Photographers-FishEye",
      description: "Creating an Aesthetic User Interface: Designing a visually appealing and user-friendly website featuring the photographer's work.Accessibility Considerations (Optional): Implementing accessibility best practices to make the website usable for everyone, including users with disabilities..",
      images: ["photog1.png", "photog2.png","photog3.png","photog4.png"],
      imageBasic: "photog1.png",
      technology: "html,css, JavaScript",
      url: "https://photographers-marwen.netlify.app"
    },
    {
      title: "Les petits Plats",
      description: "It involves building a recipe website with a focus on implementing a filtering system using JavaScript.",
      images: ["recette1.png", "recette2.png"],
      imageBasic: "recette1.png",
      technology: "html,css, JavaScript",
      url: "https://recipies-filter-marwen.netlify.app"
    }



  ];

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    setSelectedImageIndex(0);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleShowProjects = () => {
    setShowProjects(prev => !prev)
  };

  return (
    <div className="javascriptonly">
      <button className="show-more" onClick={handleShowProjects}>
        Click me 
        <svg className="animated-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21l-12-18h24z" />
        </svg>
      </button>

      {!showProjects && <p>To see the rest of the projects : JavaScript & Responsive app</p> }

      

      {showProjects && (
        <div className="projets">
          {projets.map((project, index) => (
            <div className="project" key={index}>
              <img
                src={project.imageBasic}
                alt={project.title}
                className="project-image"
                onClick={() => handleModalOpen(project)}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.technology}</p>
                <button onClick={() => handleModalOpen(project)} className="learn-more">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && selectedProject && (
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleModalClose}>&times;</span>
      <h2>{selectedProject.title}</h2>
      <div className="modal-top">
        <div className="carousel">
          <button className="prev" onClick={handlePrevImage}>&#10094;</button>
          <img src={selectedProject.images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} />
          <button className="next" onClick={handleNextImage}>&#10095;</button>
        </div>
      </div>
      <div className="modal-bottom">
        <div className="description">
          <p>{selectedProject.description}</p>
        </div>
        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="visit-website">
          Visit Website
        </a>
      </div>
    </div>
  </div>
      )  }
    </div>
  );
};

export default JavaScriptOnly;
