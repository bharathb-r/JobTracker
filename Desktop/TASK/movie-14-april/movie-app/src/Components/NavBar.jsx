import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Movie APP</Link>
      </div>
      <div>
        <Link to={"/"}>HOME</Link>
        <br />
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
