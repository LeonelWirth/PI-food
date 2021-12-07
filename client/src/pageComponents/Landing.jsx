import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className={"background"}>
      <h1>Ready to Cook?</h1>
      <button>
        <NavLink to="/home">Let's Cook!</NavLink>
      </button>
    </div>
  );
};

export default Landing;
