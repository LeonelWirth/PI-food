import React from "react";
import { NavLink } from "react-router-dom";

var url = "https://wallpaperaccess.com/full/3521505.jpg";
const Landing = () => {
  return (
    <div className={"background"}>
      <h1>Ready to Cook?</h1>
      <button>
        <NavLink to="/home">Let's Cook!</NavLink>
      </button>
      <img src={url} />
    </div>
  );
};

export default Landing;
