import React from "react";
import "./slider-button.style.scss";

const SliderButton = ({ children, onClick }) => {
  return (
    <button className="slider__btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default SliderButton;
