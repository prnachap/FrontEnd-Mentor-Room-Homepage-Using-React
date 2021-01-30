import React from "react";
import "./mobile-navigation.style.scss";

const MobileNavigation = ({ open }) => {
  return (
    <nav className={`mobile__nav ${open ? "from-top" : "from-bottom"}`}>
      <div className="mobile__nav-item">
        <a href="/" className="mobile__nav-link">
          home
        </a>
        <a href="/" className="mobile__nav-link">
          shop
        </a>
        <a href="/" className="mobile__nav-link">
          about
        </a>
        <a href="/" className="mobile__nav-link">
          contact
        </a>
      </div>
    </nav>
  );
};

export default MobileNavigation;
