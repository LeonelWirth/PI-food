import FoodCard from "./FoodCard";
import React from "react";

export default function CardContainer(props) {
  // Por props le tiene que llegar en que pagina esta y la data asi saber cuales mostrar
  // La data viene en un arreglo

  // Segun en que pagina este voy a mostrar desde el compoonente i al j
  let index1 = 0;
  let index2 = 8 + 1; // index2 - index 1 debe ser 9

  let arr9 = props.data.slice(index1, index2); // arreglo de datos de todas las tarjetas que se muestran
  return (
    <div>
      <FoodCard foodCards={arr9} />
    </div>
  );
}
