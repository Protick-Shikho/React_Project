import React, { useState } from "react";
import "./Header.css";
import menuicon from "../images/menu-icon-PNG-1.jpg";
import profileicon from "../images/88-885453_login-white-on-clear-user-icon.png";
import bgImage from "../images/106405.jpg";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div>
        <img src={bgImage} className="bgImage" alt="bgImage"/>
      </div>
      <header className="header">
        <div className="menu-container">
          <img
            src={menuicon}
            className="menu-icon"
            alt="Menu"
            onClick={toggleSidebar}
          />
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


      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
        <ul>
          <li><a href="#">Games</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <section className="hero">
        <h1>Your Ultimate Gaming Hub</h1>
        <p>Stay Ahead in the Game!</p>
      </section>
    </div>
  );
};

export default Header;
