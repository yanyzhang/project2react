import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Company. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
