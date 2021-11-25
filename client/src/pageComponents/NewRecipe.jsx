import React from "react";
import CreateRecipe from "../components/CreateRecipe";
import NavBar from "../components/NavBar";

const NewRecipe = () => {
  return (
    <div>
      <NavBar />
      <h1>Create a new Recipe</h1>
      <CreateRecipe />
    </div>
  );
};

export default NewRecipe;
