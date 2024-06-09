import React from "react";
import "./herobutton.css";
import { Link } from "react-router-dom";

const HeroButton = () => {
  return (
    <div className="hero-buttons">
      <section
        data-button-count="2"
        className="hero-button-group hero-button-group--ignore-flow hero-button-group--type-horizontal"
      >
        <Link
          title="Order Now"
          to="/products"
          className="hero-btn hero-button hero-btn--tertiary hero-button--tertiary"
        >
          <span>Order Now</span>
        </Link>

        <a
          title="Consultation"
          href="/consultation"
          className="hero-btn hero-button hero-btn--primary hero-button--primary"
        >
          <span>Schedule a Consultation</span>
        </a>
      </section>
    </div>
  );
};

export default HeroButton;
