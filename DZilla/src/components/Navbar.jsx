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
          <a href="">Home</a>
          <a href="#services"  >Our Services</a>
          <a href="#brand">Brand Impact</a>
        </div>
        <div className="nav-button">
          <a href="#">
            <button>Contact Us <i class="fa-regular fa-circle-user" ></i></button>
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