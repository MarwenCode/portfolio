import React from "react";
import "./modal.scss";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <button className="cancel" onClick={() => setShowModal((prev) => !prev)}>
        X
      </button>
      <div className="wrapper">
        <div className="project">
          <h3>Blog-app</h3>
          <p>
            A dynamic platform for creative
            expression! As a ReactJS developer, I utilized the MERN stack and
            Context API to bring this project to life. With features like
            authentication, the ability to create, edit, and personalize your
            own blog, complete with images and descriptions, this platform
            offers a unique and powerful platform for bloggers to showcase their
            ideas and thoughts. i made this project using the MERN stack &
            context API.
          </p>
        </div>
        <div className="project">
          <h3>Social-media-app</h3>
          <p>
            The second project in my portfolio is a dynamic and feature-rich
            social media platform built with the MERN stack and Context API.
            This project enables users to sign up, log in, and engage with
            others by creating, commenting on, and liking posts. With the
            ability to upload images and share their thoughts and experiences,
            this social media platform offers a unique and personalized
            experience for users to connect with one another by the chat messages.
          </p>
        </div>
        <div className="project">
          <h3>Job-app</h3>
          <p>
            A comprehensive platform
            designed to connect recruiters with skilled developers. Developers can showcase their
            skills and share their thoughts on the app's forum. The app features
            advanced search filters, making it easy for recruiters to find the
            best future employee. Developed with the MERN stack, the Job-app for
            Developers is a reliable and efficient solution for your hiring
            needs
          </p>
        </div>
        <div className="project">
          <h3>E-commerce-app</h3>
          <p>
            The fourth project is a feature-packed e-commerce platform for
            mobile phones. This platform enables users to effortlessly browse
            and purchase  mobile phone products. This platform was built using the MERN stack, ensuring a
            seamless and efficient user experience. The user can create add products on his cart and make the purchase.
          </p>
        </div>
        <div className="project">
          <h3>Dashboard-app</h3>
          <p>
            The fifth project is a dashboard app, which provides a comprehensive
            solution for managing and monitoring a business's operations. The
            app features a monthly benefits display, a complete product
            inventory with the ability to create and delete products, and a
            ticket support system for efficient customer service management. All
            of these functionalities were built using the MERN stack, ensuring a
            seamless and efficient user experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
