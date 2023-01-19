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
            It's about a Social-Media-app where a user can create a profile,
            using Context API to Register and add/delete a post , can comment
            the other posts ( friends posts). Follow && Unflow , like and
            dislike posts . Fetch news from API on scrolling bar
          </p>
        </div>
        <div className="project"><h3>Blog-app</h3>
          <p>
            It's about a Social-Media-app where a user can create a profile,
            using Context API to Register and add/delete a post , can comment
            the other posts ( friends posts). Follow && Unflow , like and
            dislike posts . Fetch news from API on scrolling bar
          </p></div>
        <div className="project"><h3>Blog-app</h3>
          <p>
            It's about a Social-Media-app where a user can create a profile,
            using Context API to Register and add/delete a post , can comment
            the other posts ( friends posts). Follow && Unflow , like and
            dislike posts . Fetch news from API on scrolling bar
          </p></div>
        <div className="project"><h3>Blog-app</h3>
          <p>
            It's about a Social-Media-app where a user can create a profile,
            using Context API to Register and add/delete a post , can comment
            the other posts ( friends posts). Follow && Unflow , like and
            dislike posts . Fetch news from API on scrolling bar
          </p></div>
        <div className="project"><h3>Blog-app</h3>
          <p>
            It's about a Social-Media-app where a user can create a profile,
            using Context API to Register and add/delete a post , can comment
            the other posts ( friends posts). Follow && Unflow , like and
            dislike posts . Fetch news from API on scrolling bar
          </p></div>
      </div>
    </div>
  );
};

export default Modal;
