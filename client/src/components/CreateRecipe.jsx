import React from "react";
import "./CreateRecipe.css";

export default function CreateRecipe(props) {
  function handlerOnChange(e) {
    // console.log(e.target.value); // valor ingresado
    switch (e.target.id) {
      case "name":
        // console.log("name: " + e.target.value);
        break;
      case "diet":
        // console.log("diet: " + e.target.value);
        break;
      case "image":
        // console.log("image: " + e.target.value);
        break;
      default:
        break;
    }
  }

  function handlerOnSubmit(e) {
    e.preventDefault();
    // console.log(e.target.value);
  }
  return (
    <div>
      <h1>Crea tu receta!</h1>
      <form onSubmit={handlerOnSubmit} className="form">
        <label>Name:</label>
        <input
          type="text"
          id={"name"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <label>Summary:</label>
        <input
          type="text"
          id={"summary"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <label>Score:</label>
        <input
          type="text"
          id={"score"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <label>HealthScore:</label>
        <input
          type="text"
          id={"healthscore"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <label>Diet:</label>
        <input
          type="text"
          id={"diet"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <label>Image:</label>
        <input
          type="text"
          id={"image"}
          onChange={handlerOnChange}
          className="input-text"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
