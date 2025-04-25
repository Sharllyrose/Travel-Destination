import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Travel Finder</h1>
      <div className="navbar-buttons">
        <button className="view-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className="view-btn"
          onClick={() => navigate("/add-destination")}
        >
          Add New
        </button>
        <button className="view-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="side-menu">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/add-destination")}>Add New</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
