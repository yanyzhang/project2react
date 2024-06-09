import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Login from "./login";
import Signup from "./signup";
import "../style.css";
import "./loginbutton.css";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setSignupModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  return (
    <div className="nav">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" title="Homepage" />
        </Link>
      </div>

      <li className="nav-list">
        <Link
          to="/Products"
          style={{
            color: "#171a20",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Products
        </Link>
      </li>
      <li className="nav-list">
        <Link
          to="/about"
          style={{
            color: "#171a20",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </Link>
      </li>
      <li className="nav-list">
        <Link
          to="/contact"
          style={{
            color: "#171a20",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>
      </li>

      <button className="login-button" title="Login" onClick={openLoginModal}>
        <FaRegUserCircle />
      </button>

      {isLoginModalOpen && (
        <Login openSignupModal={openSignupModal} closeModal={closeModal} />
      )}

      {isSignupModalOpen && (
        <Signup openLoginModal={openLoginModal} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Navbar;
