import React from "react";
import "./overlay.style.scss";

const Overlay = ({ open }) => {
  return <div className={`overlay ${!open ? "fade-out" : "fade-in"}`}></div>;
};

export default Overlay;
