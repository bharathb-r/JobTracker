import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook to get user and logout

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/my-applications">My Applications</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        {/* Welcome message and Logout button */}
        {user && (
          <div className="user-info">
            <h1>Welcome, {user.name}</h1>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
