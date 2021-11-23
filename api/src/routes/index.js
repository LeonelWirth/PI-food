// const { Router } = require("express");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const router = Router();

var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
// const getRecipes = require("../axios/getRecipes");
const { setRecipe } = require("../funciones/funciones");
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
      });
  } catch (error) {
    console.log("ERROR al obtener todas las recetas en el path  ", "/");
    res.send(error);
  } finally {
    for (let i = 0; i < dataRecibida.data.results.length; i++) {
      // Agrego las 100 peticiones a la base de datos;
      await Recipe.create({
        title: dataRecibida.data.results[i].title,
        summary: dataRecibida.data.results[i].summary,
        score: dataRecibida.data.results[i].spoonacularScore,
        healthScore: dataRecibida.data.results[i].healthScore,
        steps: dataRecibida.data.results[i].analyzedInstructions.steps,
        diets: dataRecibida.data.results[i].diets,
      });
    }
  }
});

// router.get("/recipes/:id", async (req, res) => {
//   // LISTO
//   const id = req.params.id;
//   console.log("El parametro pasado por URL es: " + id);
//   // try {
//   axios
//     .get(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`
//     )
//     .then((results) => {
//       // console.log(results);
//       res.send(results.data);
//       return results;
//     })
//     .catch((error) => {
//       res.send(error);
//       throw new Error("Error GET en el path/:id :", error);
//     });
// });

// router.get("/recipes", async function (req, res) {
//   var queryData = req.query.name;
//   if (queryData) {
//     console.log(req.query.name);
//     try {
//       axios
//         .get(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&name=${queryData}`
//         )
//         .then((results) => {
//           console.log(results.data.results);
//           res.send(results.data.results);
//         });
//     } catch (error) {
//       res.send(error);
//       throw new Error("Error GET en el path/:id :", error);
//     }
//   } else {
//     res.send("Entre a recipes pero sin valor en query.name");
//   }
// });

// router.get("/types", async (req, res) => {
//   let dietas = await Diet.findAll();
//   let response = [];
//   dietas.map((elem) => response.push(elem.dataValues.name));
//   res.send(response);
//   console.log(response);
// });

// router.post("/recipe", async (req, res) => {
//   let { title, summary, score, healthScore, steps, image, diets } = req.body;
//   if (title && summary && score && healthScore && steps && image && diets) {
//     try {
//       await Recipe.create({
//         // id: id,
//         title: title,
//         summary: summary,
//         score: score,
//         healthScore: healthScore,
//         steps: steps,
//         image: image,
//         diets: diets,
//       });
//       // console.log(await Recipe.findAll());
//       res.send("Tabla de recetas: " + (await Recipe.findAll()));
//     } catch (error) {
//       // throw new Error("Fallo al setear una nueva receta");
//       res.send("Ocurrio un error en el post /recipes: " + error);
//     }
//   }
// });

module.exports = router;
