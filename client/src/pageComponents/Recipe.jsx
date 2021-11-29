import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router";

const Recipe = (props) => {
  const { id } = useParams();
  return (
    <div>
      <NavBar />
      <h1>Recipe</h1>
      {console.log(id)}
    </div>
  );
};

export default Recipe;
