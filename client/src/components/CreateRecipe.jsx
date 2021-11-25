import React from "react";

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
      <form onSubmit={handlerOnSubmit}>
        <label>Name:</label>
        <input type="text" id={"name"} onChange={handlerOnChange}></input>
        <label>Diet:</label>
        <input type="text" id={"diet"} onChange={handlerOnChange}></input>
        <label>Image:</label>
        <input type="text" id={"image"} onChange={handlerOnChange}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
