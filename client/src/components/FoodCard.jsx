import { useState } from "react";

export default function FoodCard(props) {
  // Le paso por props un arreglo con las recetas a mostrar
  console.log(props.foodCards);
  return (
    <div>
      {props.foodCards?.map((food) => {
        {
          /* console.log(food); */
        }
        return (
          <div>
            <h2>{food.title}</h2>
            <img src={food.image} />
            <p>Diets: {food.diets}</p>
          </div>
        );
      })}
    </div>
  );
}
