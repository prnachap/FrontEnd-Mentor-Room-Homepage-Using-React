import React from "react";
import "./hero-content.style.scss";
import Button from "../button/Button";

const HeroContent = ({ title, description, position }) => {
  return (
    <div className={`hero__content ${position}`}>
      <h1 className="hero__title">{title}</h1>
      <p className="hero__description">{description}</p>
      <Button />
    </div>
  );
};

export default HeroContent;
