import React from "react";
import "./button.style.scss";
import { ReactComponent as Logo } from "../../assets/icon-arrow.svg";

const Button = () => {
  return (
    <button className="btn">
      Shop Now <Logo />
    </button>
  );
};

export default Button;
