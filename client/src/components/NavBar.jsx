import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check"> */}
      <div className="nav-header">
        <div className="nav-title">Food App</div>
      </div>
      <div className="nav-links">
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/newRecipe">New Recipe</NavLink>
        <NavLink to="/recipe">Recipe</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <div>
      <h1>Navigation Bar</h1>
      <ul>
        <li>
          <NavLink to="/">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/newRecipe">New Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/recipe">Recipe</NavLink>
        </li>
      </ul>
    </div> */
}
