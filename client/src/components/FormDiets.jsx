import React from "react";

function FormDiets(props) {
  return (
    <select
      onChange={(e) => {
        console.log(e.target.value);
      }}
    >
      <option selected disabled>
        Chose diets
      </option>
      {props.diet.map((elem) => {
        return <option value={elem}>{elem}</option>;
      })}
    </select>
  );
}

export default FormDiets;
