import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later you can connect this to your API
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Welcome To Job Tracker</h1>
      <h3 className="signup-subtitle">Sign Up</h3>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="signup-label">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter Your First Name"
          className="signup-input"
          value={formData.firstname}
          onChange={handleChange}
        />

        <label htmlFor="lastname" className="signup-label">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter Your Last Name"
          className="signup-input"
          value={formData.lastname}
          onChange={handleChange}
        />

        <label htmlFor="email" className="signup-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="signup-input"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="signup-label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          className="signup-input"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Your Password"
          className="signup-input"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">Sign Up</button>
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
