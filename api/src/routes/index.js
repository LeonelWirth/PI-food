var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
// const { setRecipe } = require("../funciones/funciones");
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7 } =
  process.env;
var API = API_KEY1;
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
  var dataDB;
  // ---------> Obtengo las 100 primeras recetas con todos sus datos
  var resultado = [];
  try {
    dataDB = await Recipe.findAll();
    for (let i = 0; i < dataDB.length; i++) {
      resultado[i] = dataDB[i].dataValues;
      resultado[i] = {
        ...resultado[i],
        analyzedInstructions: [
          { steps: [{ number: 1, step: resultado[i].steps }] },
        ],
      };
    }
    console.log("resultado es:   > ", resultado);
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
        // res.send(response);
        if (dataDB[0]) {
          res.send(dataRecibida.data.results.concat(resultado));
        } else {
          res.send(dataRecibida.data.results);
        }
      });
  } catch (error) {
    console.log("ERROR al obtener todas las recetas en el path  ", "/");
    res.send(error);
  } finally {
    // console.log("Data recibida api: ", dataRecibida.data.results);
    // console.log("Data recibida DB: ", dataDB[0].dataValues);
    // console.log(
    //   "Data concatenada: ",
    //   dataRecibida.data.results.concat(dataDB[0].dataValues)
    // );
  }
});

module.exports = router;
