import React from "react";
import "./hero-image.style.scss";

const HeroImage = ({ mobile, desktop, alt, position }) => {
  return (
    <picture className={`hero__image ${position}`}>
      <source srcSet={mobile} media="(max-width:37.5em)"/>
      <img src={desktop} alt={alt} />
    </picture>
  );
};

export default HeroImage;
