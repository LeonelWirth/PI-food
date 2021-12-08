import React from "react";
import { NavLink } from "react-router-dom";
import "./FoodCard.css";

export default function FoodCard(props) {
  // Le paso por props un arreglo con las recetas a mostrar
  // console.log(props.foodCard);
  // const handleClick = () => {};

  return (
    <div className="container">
      <NavLink to={`/recipe/${props.foodCard.id}`} className="link">
        <div>
          <h2>{props.foodCard.title}</h2>
          <img src={props.foodCard.image} />
          <p className="foodcard-subtitle">Diets:</p>
          {props.foodCard.diets[0].name ? (
            <ul className="foodcard-ul">
              {props.foodCard.diets[0].name.map((elem) => {
                return (
                  <li className="foodcard-li" key={Math.random()}>
                    {elem}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="foodcard-ul">
              {props.foodCard.diets.map((elem) => {
                return (
                  <li className="foodcard-li" key={Math.random()}>
                    {elem}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </NavLink>
    </div>
  );
}
