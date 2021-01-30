import React from "react";
import "./logo.style.scss";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <a href="/" className="logo__container">
      <img src={logo} alt="room" className="logo" />
    </a>
  );
};

export default Logo;
