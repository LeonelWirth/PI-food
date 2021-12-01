import React from "react";
import axios from "axios";
import "./CreateRecipe.css";
import { useState } from "react";

export default function CreateRecipe(props) {
  const [css, setCss] = useState({
    titleCss: true,
    summaryCss: true,
    scoreCss: true,
    healthScoreCss: true,
    dietCss: true,
    imageCss: true,
    stepsCss: true,
  });
  const [form, setForm] = useState({
    check: false,
  });

  function handlerOnChange(e) {
    switch (e.target.id) {
      case "name":
        setForm((form) => ({ ...form, title: e.target.value }));
        console.log("name: " + e.target.value);
        if (!form.title) {
          setCss((prevstate) => ({ ...prevstate, titleCss: false }));
          console.log("Deberia tener un nombre");
        } else {
          setCss((prevstate) => ({ ...prevstate, titleCss: true }));
        }
        break;
      case "summary":
        setForm((form) => ({ ...form, summary: e.target.value }));
        console.log("summary: " + e.target.value);
        if (!form.summary) {
          setCss((prevstate) => ({ ...prevstate, summaryCss: false }));
          console.log("Deberia tener un resumen");
        } else {
          setCss((prevstate) => ({ ...prevstate, summaryCss: true }));
        }
        break;
      case "score":
        setForm((form) => ({ ...form, score: e.target.value }));
        console.log("score: " + e.target.value);
        if (!(form.score > 0 && form.score <= 100)) {
          setCss((prevstate) => ({ ...prevstate, scoreCss: false }));
          console.log("El score dbe estar entre 1 y 100");
        } else {
          setCss((prevstate) => ({ ...prevstate, scoreCss: true }));
        }
        break;
      case "healthscore":
        setForm((form) => ({ ...form, healthScore: e.target.value }));
        console.log("healthscore: " + e.target.value);
        if (!(form.healthScore > 0 && form.healthScore <= 100)) {
          setCss((prevstate) => ({ ...prevstate, healthScoreCss: false }));
          console.log("El HealdthScore dbe estar entre 1 y 100");
        } else {
          setCss((prevstate) => ({ ...prevstate, healthScoreCss: true }));
        }
        break;
      case "diet":
        setForm((form) => ({ ...form, diet: e.target.value }));
        console.log("diet: " + e.target.value);
        if (!form.diet) {
          setCss((prevstate) => ({ ...prevstate, dietCss: false }));
          console.log("Deberia tener una o mas dietas");
        } else {
          setCss((prevstate) => ({ ...prevstate, dietCss: true }));
        }
        break;
      case "image":
        setForm((form) => ({ ...form, image: e.target.value }));
        console.log("image: " + e.target.value);
        if (!form.image) {
          setCss((prevstate) => ({ ...prevstate, imageCss: false }));
          console.log("Deberia tener una imagen");
        } else {
          setCss((prevstate) => ({ ...prevstate, imageCss: true }));
        }
        break;
      case "steps":
        setForm((form) => ({ ...form, steps: [e.target.value] }));
        console.log("steps: ", [e.target.value]);
        if (!form.steps) {
          setCss((prevstate) => ({ ...prevstate, stepsCss: false }));
          console.log("Deberia tener una imagen");
        } else {
          setCss((prevstate) => ({ ...prevstate, stepsCss: true }));
        }
        break;
      default:
        break;
    }
    if (
      form.title &&
      form.image &&
      form.diet &&
      form.healthScore &&
      form.score &&
      form.summary &&
      form.steps
    ) {
      setForm((state) => ({ ...state, check: true }));
    } else {
      setForm((state) => ({ ...state, check: false }));
    }
  }

  function handlerOnSubmit(e) {
    e.preventDefault();

    if (form.check) {
      console.log("voy a enviar: " + form);
      try {
        axios.post("http://localhost:3001/recipe", form);
        console.log(form);
        alert("Receta creada: " + form.title + " !");
      } catch (error) {
        alert("Error al crear receta: " + error);
      } finally {
        setForm((state) => ({ ...state, check: false }));
      }
    } else {
      alert("Todos los campos del formulario deben completarse correctamente");
    }
  }
  return (
    <div>
      <h1>Crea tu receta!</h1>
      <form onSubmit={handlerOnSubmit} className="form">
        <label>Name:</label>
        <input
          type="text"
          id="name"
          onChange={handlerOnChange}
          className={css.titleCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>Summary:</label>
        <input
          type="text"
          id="summary"
          onChange={handlerOnChange}
          className={css.summaryCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>Score:</label>
        <input
          type="text"
          id="score"
          onChange={handlerOnChange}
          className={css.scoreCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>HealthScore:</label>
        <input
          type="text"
          id="healthscore"
          onChange={handlerOnChange}
          className={css.healthScoreCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>Diet:</label>
        <input
          type="text"
          id="diet"
          onChange={handlerOnChange}
          className={css.dietCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>Image:</label>
        <input
          type="text"
          id="image"
          onChange={handlerOnChange}
          className={css.imageCss ? "valid-form" : "invalid-form"}
        ></input>
        <label>Steps:</label>
        <input
          type="text"
          id="steps"
          onChange={handlerOnChange}
          className={css.stepsCss ? "valid-form" : "invalid-form"}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
