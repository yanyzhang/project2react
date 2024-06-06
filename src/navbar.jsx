import React from "react";
import { Link } from "react-router-dom";
// import logo from "./images/logo.png";
// import "./style.css";

function Navbar() {
  return (
    <div className="nav">
      {/* <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div> */}

      <li className="nav-list">
        <Link to="/">Homepage</Link>
      </li>
      <li className="nav-list">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-list">
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
}

export default Navbar;
