import React from "react";
import "./hamburger.style.scss";
import MenuIcon from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";

const Hamburger = ({ onClick, open }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <img src={open ? CloseIcon : MenuIcon} alt="" />
    </div>
  );
};

export default Hamburger;
