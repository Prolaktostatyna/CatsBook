import React from "react";
import "./NotFound.scss";

const NotFound = ({ text }) => {
  return (
    <>
      <div className="notFoundGeneral">
        <p className="notFoundGeneral__text">{text}</p>
        <section className="notFoundGeneral__image"></section>
      </div>
    </>
  );
};

export default NotFound;

// Upss! We do not have this breed in our database
