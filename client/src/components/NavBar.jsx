import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBar;
