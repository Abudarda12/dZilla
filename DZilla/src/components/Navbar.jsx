import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="src/components/8b0dbdc8366df57fb0a62d932ec9e78cf4dda292.png"
            alt="logo"
            width="112"
            height="56"
          />
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`} id="menu">
          <a href="#">Home</a>
          <a href="#">Our Services</a>
          <a href="#">Brand Impact</a>
        </div>
        <div className="nav-button">
          <a href="#">
            <button>Contact us <img src="src\components\9f18301427cd2a5206d430b171a00dd562192ff9.png" alt="" /></button>
          </a>
        </div>
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;