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
        <p className="recipe-subtitle">Summary:</p>
        <p>{recipe.summary?.replace(/<[^>]*>?/g, "")}</p>
        <p className="recipe-subtitle">Dish Types:</p>
        <p> {recipe.dishTypes}</p>
        <p className="recipe-subtitle">Diet Types:</p>
        {recipe.diets[0].name ? (
          <>
            {recipe.diets.map((elem) => {
              return (
                <p className="recipe-li" key={Math.random()}>
                  {elem.name}
                </p>
              );
            })}
          </>
        ) : (
          <>
            {recipe.diets.map((elem) => {
              return (
                <p className="recipe-li" key={Math.random()}>
                  {elem}
                </p>
              );
            })}
          </>
        )}

        <p className="recipe-subtitle">Score:</p>
        <p>
          {recipe.spoonacularScore ? recipe.spoonacularScore : recipe.score}
        </p>
        <p className="recipe-subtitle">Health Score: </p>
        <p>{recipe.healthScore}</p>
        {renderSteps()}
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
