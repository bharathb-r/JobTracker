import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${formData.email}`
      );
      const user = response.data[0];

      if (user && user.password === formData.password) {
        const fakeToken = "abc123xyz456";
        localStorage.setItem("authToken", fakeToken);
        login({ name: user.firstname , email:user.email}, fakeToken);
        navigate("/home");
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="login-container">
      {error && <p className="error-message">{error}</p>}
      <h1 className="login-title">Welcome To Job Tracker</h1>
      <h3 className="login-subtitle">Login</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="create-account">
        <h5>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
