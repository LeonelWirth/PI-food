import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className={"background"}>
      <h1>Ready to Cook?</h1>
      <NavLink to="/home">
        <button className="navlink">Let's Cook!</button>
      </NavLink>
    </div>
  );
};

export default Landing;
