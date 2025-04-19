import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    if (!formData.name || !formData.password) {
      alert("Please fill in both fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://your-backend-url/api/auth/login",
        formData
      );
      const { user, token } = response.data;
      console.log("Login successful, token:", token);

      login(user, token);
      navigate("/home");
    } catch (error) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      {error && <p className="error-message">{error}</p>}
      <h1 className="login-title">Welcome To Job Tracker</h1>
      <h3 className="login-subtitle">Login</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="login-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          className="login-input"
          value={formData.name}
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
          Create Account
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
