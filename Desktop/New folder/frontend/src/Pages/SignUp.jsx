import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-title">Welcome To Job Tracker</h1>
      <h3 className="signup-subtitle">Sign Up</h3>
      <form className="signup-form" action="">
        <label htmlFor="firstname" className="signup-label">
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter Your Name"
          className="signup-input"
        />
        <label htmlFor="lastname" className="signup-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter Your Name"
          className="signup-input"
        />

        <label htmlFor="email" className="signup-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="signup-input"
        />

        <label htmlFor="password" className="signup-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="signup-input"
        />
        <label htmlFor="confirmPassword" className="signup-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Conform Your Password"
          className="signup-input"
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <div className="already-account">
        <h5>Already have an account?</h5>
        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
