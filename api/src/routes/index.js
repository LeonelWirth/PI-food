// const { Router } = require("express");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const router = Router();

var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const getRecipes = require("../axios/getRecipes");

const { API_KEY, API_KEY2 } = process.env;
// console.log(API_KEY);

// Acuerdense de agregar su router o cualquier middleware que necesiten aca
// to enable parsing of json bodies for post requests
router.use(express.json()); //Middleware!!!

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  var numRecpies = 100; // Cantidad de recetas de la peticion
  // var dataRecibida = await getRecipes(numRecpies);
  var dataRecibida;
  // ---------> Obtengo las 100 primeras recetas con todos sus datos
  try {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=${numRecpies}`
      )
      .then((results) => {
        const response = results.data;
        dataRecibida = results;
        res.send(response);
        // console.log(results);
      });
    // .then((data) => console.log(data));

    // console.log(results.data);
  } catch (error) {
    console.log("ERROR al obtener todas las recetas en el path  ", "/");
  } finally {
    // console.log(dataRecibida);
    for (let i = 0; i < dataRecibida.data.results.length; i++) {
      let newRecipe = await Recipe.create({
        name: dataRecibida.data.results[i].title,
        summary: dataRecibida.data.results[i].summary,
        score: dataRecibida.data.results[i].spoonacularScore,
        healthScore: dataRecibida.data.results[i].healthScore,
        steps: dataRecibida.data.results[i].analyzedInstructions.steps,
      });
      console.log(newRecipe);
      await newRecipe.save();
    }
  }
  // // -------------------------------------------------------------

  // console.log(dataRecibida.data.results[0]);
  // console.log("id: " + dataRecibida.data.results[0].id);
  // console.log("title: " + dataRecibida.data.results[0].title);
  // console.log("summary: " + dataRecibida.data.results[0].summary);
  // console.log(
  //   "spoonacularScore: " + dataRecibida.data.results[0].spoonacularScore
  // );
  // console.log("healthScore: " + dataRecibida.data.results[0].healthScore);
  // console.log("steps: " + dataRecibida.data.results[0].analyzedInstructions.steps);

  //-------------- Ahora guardo todo en la base de datos------------
});

router.get("/recipes/:id", async (req, res) => {
  // LISTO
  const id = req.params.id;
  console.log("El parametro pasado por URL es: " + id);
  // try {
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`
    )
    .then((results) => {
      // console.log(results);
      res.send(results.data);
      return results;
    })
    .catch((error) => {
      res.send(error);
      throw new Error("Error GET en el path/:id :", error);
    });
});

router.get("/recipes", async function (req, res) {
  var queryData = req.query.name;
  if (queryData) {
    // console.log(req.query.name);
    var instancias = [];
    try {
      instancias = await Recipe.findAll().then((recipe) => res.send(recipe));
      // console.log("Recipe:    " + Recipe);
    } catch (error) {
      //
      instancias = error;
      console.log("ERROR: " + instancias);
    } finally {
      console.log("Recetas:  " + instancias);
      res.json(instancias); // corre y muestra el valor de query pero tira un warning/error de promesa sin handler
    }
  } else {
    res.send("Entre a recipes pero sin valor en query.name");
  }
});

module.exports = router;
