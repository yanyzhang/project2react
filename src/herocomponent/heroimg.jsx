import React from "react";
import "./heroimg.css";
import HeroButton from "./herobutton";

const Hero = () => {
  const heroImage =
    "https://media.architecturaldigest.com/photos/64c7bb7ef56f0faa02d217c6/16:9/w_2560%2Cc_limit/GettyImages-1384831593.jpg";

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1>Powering the Future with Solar Energy</h1>
        <p>Join us in our mission to create a sustainable world.</p>
        <HeroButton />
      </div>
    </div>
  );
};

export default Hero;
