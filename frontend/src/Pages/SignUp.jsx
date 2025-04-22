import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending the form data to json-server
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("User signed up successfully:", response.data);
      alert("Signup Successful! Please login now.");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
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

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <div className="already-account">
        <h5>Already have an account?</h5>
        <Link to="/login" className="login-link">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;