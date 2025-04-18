import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Welcome To Job Tracker</h1>
      <h3 className="login-subtitle">Login</h3>
      <form className="login-form" action="">
        <label htmlFor="name" className="login-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your name"
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="create-account">
        <h5>Create Account <Link to="/signup" className="signup-link">Sign Up</Link> </h5>
        
      </div>
    </div>
  );
};

export default Login;
