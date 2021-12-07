import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./FoodCard.css";

export default function FoodCard(props) {
  // Le paso por props un arreglo con las recetas a mostrar
  // console.log(props.foodCard);
  const handleClick = () => {};

  return (
    <div className="container">
      <NavLink to={`/recipe/${props.foodCard.id}`} className="link">
        <div>
          <h2>{props.foodCard.title}</h2>
          <img src={props.foodCard.image} />
          {props.foodCard.diets[0].name ? (
            <p>Diets: {props.foodCard.diets[0].name}</p>
          ) : (
            <p>Diets: {props.foodCard.diets}</p>
          )}
        </div>
      </NavLink>
    </div>
  );
}
