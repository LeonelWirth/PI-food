import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFoodCards, getDietTypes } from "../store/actions/index";

const Recipe = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food); // Traigo parte del estado de redux y lo asigno a data
  console.log("Data: ", data);
  console.log("Recipe: ", recipe);
  const diet = useSelector((state) => state.diet); // Traigo parte del estado de redux y lo asigno a diea
  const check = (id) => {
    if (!id) {
      alert(
        "Id de receta no valido, vuelva a home y haga click en una receta para ver mas informacion"
      );
    }
  };
  // Busco la data que quiero mostrar
  const search = (data) => {
    let result = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        // Solo 2
        result = data[i];
      }
    }
    setRecipe(result);
  };
  useEffect(() => {
    dispatch(getFoodCards());
    dispatch(getDietTypes());
    search(data);
  }, []);

  return (
    <div>
      <div>
        <NavBar />
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} />
          <p>Summary: {recipe.summary?.replace(/<[^>]*>?/g, "")}</p>
          <p>Dish Types: {recipe.dishTypes}</p>
          <p>Diet Types: {recipe.diets}</p>
          <p>Score: {recipe.spoonacularScore}</p>
          <p>Health Score: {recipe.healthScore}</p>
          {/* <p>Steps: {recipe.dishTypes}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
