import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function FoodCard(props) {
  // Le paso por props un arreglo con las recetas a mostrar
  // console.log(props.foodCard);
  const handleClick = () => {};

  return (
    <div>
      <NavLink to={`/recipe/${props.foodCard.id}`}>More info</NavLink>
      <div>
        <h2>{props.foodCard.title}</h2>
        <img src={props.foodCard.image} />
        <p>Diets: {props.foodCard.diets}</p>
      </div>
    </div>
  );
}
