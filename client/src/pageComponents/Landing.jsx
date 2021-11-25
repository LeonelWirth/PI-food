import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  {
    // console.log("Entre al div!!!");
  }
  return (
    <div>
      <h1>Landing Page</h1>
      <p>Se picaaaaaa</p>
      <NavLink to="/home">Let's Cook!</NavLink>
    </div>
  );
};

export default Landing;
