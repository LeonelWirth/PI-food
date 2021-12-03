var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { setRecipe } = require("../funciones/funciones");
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7 } =
  process.env;
var API = API_KEY4;
// console.log(API_KEY);

// Acuerdense de agregar su router o cualquier middleware que necesiten aca
// to enable parsing of json bodies for post requests
router.use(express.json()); //Middleware!!!

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  var numRecpies = 15; // Cantidad de recetas de la peticion
  // var dataRecibida = await getRecipes(numRecpies);
  var dataRecibida;
  // ---------> Obtengo las 100 primeras recetas con todos sus datos
  try {
    var dataDB = await Recipe.findAll();
    var resultado = [];
    for (let i = 0; i < dataDB.length; i++) {
      resultado[i] = dataDB[i].dataValues;
    }
    // console.log("resultado es:   > ", resultado);
  } catch (error) {
    res.send("Error en pedido a DB: ", error);
  }
  // console.log(dataDB);
  // if (dataDB.length === 0) {
  try {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&number=${numRecpies}`
      )
      .then((results) => {
        const response = results?.data;
        // console.log("Response es: ", response);
        dataRecibida = results;
        res.send(response);
      });
  } catch (error) {
    console.log("ERROR al obtener todas las recetas en el path  ", "/");
    res.send(error);
  } finally {
    // for (let i = 0; i < dataRecibida.data.results.length; i++) {
    //   // Agrego las 100 peticiones a la base de datos;
    //   await Recipe.create({
    //     title: dataRecibida.data.results[i].title,
    //     summary: dataRecibida.data.results[i].summary,
    //     score: dataRecibida.data.results[i].spoonacularScore,
    //     healthScore: dataRecibida.data.results[i].healthScore,
    //     steps: dataRecibida.data.results[i].analyzedInstructions.steps,
    //     diets: dataRecibida.data.results[i].diets,
    //   });
    // }
  }
});

module.exports = router;
