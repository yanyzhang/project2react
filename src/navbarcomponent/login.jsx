import React from "react";
import "./loginbutton.css";

function Login({ openSignupModal, closeModal }) {
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
              onClick={openSignupModal}
            >
              Sign Up
            </button>
            <button type="button" className="loginbtn">
              Log In
            </button>
          </div>

          <div className="term">
            <p>
              By continuing, I agree to the &nbsp;
              <a href="#" style={{ color: "rgb(0, 0, 0)" }}>
                Terms & Privacy
              </a>
              .
            </p>
          </div>

          <div className="inputs">
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
                    name="rememberMe"
                    id="rememberMe"
                    type="checkbox"
                    data-testid="checkboxInput"
                  />
                  <label className="modal-login-remember" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>
              <span className="rememberMeBox" aria-live="polite"></span>
            </div>
            <a className="modal-login-password-help" href="">
              Forgot password?
            </a>
          </div>
          <br />
          <div>
            <button className="start">Login</button>
          </div>

          <p>
            Don't have an account? &nbsp;
            <a
              href="#"
              style={{ color: "rgb(19, 103, 187)" }}
              onClick={openSignupModal}
            >
              Create One
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

export default Login;
