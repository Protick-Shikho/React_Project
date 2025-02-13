import React, { useState } from "react";
import "./Header.css";
import menuicon from "../images/menu-icon-PNG-1.jpg";
import profileicon from "../images/88-885453_login-white-on-clear-user-icon.png";
import bgImage from "../images/106405.jpg";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div>
    <img src={bgImage} className="bgImage" alt="bgImage"/></div>
    <header className="header">
      <div className="menu-container">
        <img
          src={menuicon}
          className="menu-icon"
          alt="Menu"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Games</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className="logo">StrikeForce</div>
      <nav>
        <ul>
          <li><a href="#">Games</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </nav>
      <div className="login-container">
        <img src={profileicon} className="profileicon" alt="Profile" />
        <div className="login">
          <a href="#">LOGIN OR SIGNUP</a>
        </div>
      </div>
    </header>

    <section className="hero">
      <h1>Your Ultimate Gaming Hub</h1>
      <p>Stay Ahead in the Game!</p>
    </section>
    
    hello world
    </div>
  );
};

export default Header;
