import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check"> */}
      <div className="nav-header">
        {/* <div className="nav-title">Food App</div> */}
        <NavLink to="/" className="nav-title">
          Food App
        </NavLink>
      </div>
      <div className="nav-links">
        {/* <NavLink to="/">Landing</NavLink> */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/newRecipe">New Recipe</NavLink>
        {/* <NavLink to="/recipe">Recipe</NavLink> */}
      </div>
    </div>
  );
};

export default NavBar;
