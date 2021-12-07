var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");

const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7 } =
  process.env;
var API = API_KEY2;
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    var encuestaDB = await Recipe.findAll({
      where: {
        id: id,
      },
      include: [{ model: Diet }],
    });

    // encuestaDB[0].dataValues = {
    //   ...encuestaDB[0].dataValues,
    //   analyzedInstructions: [
    //     { steps: [{ number: 1, step: encuestaDB[0].dataValues.steps }] },
    //   ], //
    // };
    encuestaDB[0].dataValues = {
      ...encuestaDB[0].dataValues,
      analyzedInstructions: [{ steps: encuestaDB[0].dataValues.steps }], //
    };
  } catch (error) {
    console.log("Error o no hay nada");
  }
  if (encuestaDB) {
    res.send(encuestaDB[0]);
  } else {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`
      )
      .then((results) => {
        // console.log(results.data);
        res.send(results.data);
        return results;
      })
      .catch((error) => {
        res.send(error);
        throw new Error("Error GET en el path/:id :", error);
      });
  }
});

router.get("/", async function (req, res) {
  var queryData = req.query.name;
  var numRecpies = 30; // Cantidad de recetas de la peticion
  var dataRecibida;
  var dataDB;
  // ---------> Obtengo las 100 primeras recetas con todos sus datos
  var resultado = [];
  if (queryData) {
    try {
      dataDB = await Recipe.findAll({
        include: [{ model: Diet }],
      });
      for (let i = 0; i < dataDB.length; i++) {
        resultado[i] = dataDB[i].dataValues;
        resultado[i] = {
          ...resultado[i],
          analyzedInstructions: [
            { steps: [{ number: 1, step: resultado[i].steps }] },
          ],
        };
      }
    } catch (error) {
      res.send("Error en pedido a DB: ", error);
    }
    try {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&number=${numRecpies}`
        )
        .then((results) => {
          const response = results?.data;
          dataRecibida = results;
          if (dataDB[0]) {
            // filtrar
            let data = dataRecibida.data.results.concat(resultado);
            let filteredRecipes = data.filter((elem) =>
              elem.title.toLowerCase().includes(queryData.toLowerCase())
            );
            // console.log("Data filtrada: ", filteredRecipes);
            res.send(filteredRecipes);
            // res.send(dataRecibida.data.results.concat(resultado));
          } else {
            //filtrar
            let data = dataRecibida.data.results;
            let filteredRecipes = data.filter((elem) =>
              elem.title.toLowerCase().includes(queryData.toLowerCase())
            );
            // res.send(dataRecibida.data.results);
            // console.log("Data filtrada: ", filteredRecipes);
            res.send(filteredRecipes);
          }
        });

      // axios
      //   .get(
      //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&name=${queryData}`
      //   ) //&number=1
      //   .then((results) => {
      //     console.log(
      //       "Los resultados de la busqueda son: ",
      //       results.data.results
      //     );
      //     res.send(results.data.results);
      //   });
    } catch (error) {
      res.send(error);
      throw new Error("Error GET en el path/recipes/query", error);
    }
  } else {
    res.send("Entre a recipes pero sin valor en query.name");
  }
});

module.exports = router;
