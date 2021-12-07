import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFoodCardsByID } from "../store/actions/index";
import Steps from "../components/Steps";
import image from "../Image/Loading.jpg";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food); // Traigo parte del estado de redux y lo asigno a data
  const diet = useSelector((state) => state.diet); // Traigo parte del estado de redux y lo asigno a diea
  const check = (id) => {
    if (!id) {
      alert(
        "Id de receta no valido, vuelva a home y haga click en una receta para ver mas informacion"
      );
    }
  };
  // Busco la data que quiero mostrar
  const search = async (data) => {
    await dispatch(getFoodCardsByID(id));
  };
  const renderSteps = () => {
    if (recipe[0]?.analyzedInstructions[0]?.steps) {
      return <Steps steps={recipe[0].analyzedInstructions[0].steps} />;
    } else {
      return <p>No steps</p>;
    }
  };
  useEffect(() => {
    search(data);
  }, []);

  useEffect(() => {
    setRecipe(data);
  }, [data]);

  const render = (recipe) => {
    console.log("Re-render ", recipe);
    let length = recipe.length;
    recipe = recipe[0];
    if (!recipe || length !== 1)
      return (
        <div>
          <h1> Loading</h1>
          <img src={image} />
        </div>
      );
    return (
      <div className="recipe-card">
        <h1>{recipe.title}</h1>
        <img src={recipe.image} />
        <p>Summary: {recipe.summary?.replace(/<[^>]*>?/g, "")}</p>
        <p>Dish Types: {recipe.dishTypes}</p>

        {/* <p>Diet Types: {recipe.diets}</p> */}
        {recipe.diets[0].name ? (
          <p>Diet Types: {recipe.diets[0].name}</p>
        ) : (
          <p>Diet Types: {recipe.diets}</p>
        )}
        <p>Score: {recipe.spoonacularScore}</p>
        <p>Health Score: {recipe.healthScore}</p>
        {renderSteps()}
        {/* <div>{renderSteps}</div> */}
      </div>
    );
  };

  return (
    <div>
      <div>
        <NavBar />
        {render(recipe)}
      </div>
    </div>
  );
};

export default Recipe;
