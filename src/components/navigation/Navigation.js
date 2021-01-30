import React from "react";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <nav className="nav mobile">
      <div className="nav__list">
        <a href="/" className="nav__link nav__link--light">
          home
        </a>
        <a href="/" className="nav__link nav__link--light">
          shop
        </a>
        <a href="/" className="nav__link nav__link--light">
          about
        </a>
        <a href="/" className="nav__link nav__link--light">
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
