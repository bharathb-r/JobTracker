import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Movie APP</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favroites">Favroites</Link>
      </div>
    </div>
  );
};

export default NavBar;
