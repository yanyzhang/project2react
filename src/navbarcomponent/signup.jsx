import React from "react";
import "./loginbutton.css";

function Signup({ openLoginModal, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="btn-close" onClick={closeModal} aria-label="Close">
            X
          </button>
          <br />
          <br />

          <div className="clearfix">
            <button
              type="button"
              className="signupbtn"
              style={{
                backgroundColor: "black",
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="loginbtn"
              style={{
                backgroundColor: "#221f1fb9",
              }}
              onClick={openLoginModal}
            >
              Log In
            </button>
          </div>

          <div className="inputs">
            <div class="flex-container">
              <input
                type="text"
                placeholder="First Name*"
                name="firstname"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                required
              />
            </div>
            <div className="emailpass">
              <input
                type="text"
                placeholder="Email Address*"
                name="email"
                required
              />

              <input
                type="password"
                placeholder="Password*"
                name="password"
                required
              />
            </div>
          </div>

          <div className="modal-login-option">
            <div className="modal-login-checkbox">
              <div className="modal-login-rememberme">
                <div className="modal-login-rememberbox">
                  <input
                    name="terms"
                    id="terms"
                    type="checkbox"
                    data-testid="checkboxInput"
                  />
                  <label className="modal-login-remember" htmlFor="terms">
                    I agree to the Terms & Conditions
                  </label>
                </div>
              </div>
              <span className="rememberMeBox" aria-live="polite"></span>
            </div>
          </div>
          <br />
          <div>
            <button className="start">Sign Up</button>
          </div>

          <p>
            Already have an account?
            <a
              href="#"
              style={{ color: "rgb(19, 103, 187)" }}
              onClick={openLoginModal}
            >
              Log In
            </a>
          </p>

          <div className="help">
            <p>
              <a href="#" style={{ color: "rgb(0, 0, 0)" }}>
                Need Help?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
