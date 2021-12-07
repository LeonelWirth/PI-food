import React from "react";
import NavBar from "../components/NavBar";
import image from "../Image/Loading.jpg";

function Default() {
  return (
    <div>
      <NavBar />
      <h1>Error 404</h1>
      <img src={image} />
    </div>
  );
}

export default Default;
