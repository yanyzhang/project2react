import React from "react";
import "../herocomponent/consultation.css";

function Consultation() {
  return (
    <div className="consultation">
      <img
        src="https://d2rxt25e475whq.cloudfront.net/wp-content/uploads/2022/12/25231501/AdobeStock_519445978-scaled.jpeg"
        alt=""
        className="roof"
      ></img>
      <div className="consultation-content">
        <h2>Virtual Consultation</h2>
        <p>
          Our Advisor can walk you through our energy products, financing
          quotes, eligibility for local incentives and answer any questions you
          may have.
        </p>
        <p>Schedule a 15-30 minute online consultation with our Advisor</p>
        <div className="address-input-container">
          <input
            className="form-input-text"
            placeholder="Enter Address"
            value=""
          />
          <br />
          <button type="button" class="consultationbtn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
