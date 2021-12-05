var express = require("express");
var router = express.Router();
const axios = require("axios");
const { API_KEY1, API_KEY2, API_KEY3, API_KEY4, API_KEY5, API_KEY6, API_KEY7 } =
  process.env;
var API = API_KEY2;
router.get("/:id", async (req, res) => {
  // LISTO
  const id = req.params.id;
  // console.log("El parametro pasado por URL es: " + id);
  axios
    .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`)
    .then((results) => {
      // console.log(results.data);
      res.send(results.data);
      return results;
    })
    .catch((error) => {
      res.send(error);
      throw new Error("Error GET en el path/:id :", error);
    });
});

router.get("/", async function (req, res) {
  var queryData = req.query.name;
  if (queryData) {
    // console.log("Al back llega el nombre: ", req.query.name);
    try {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&name=${queryData}`
        ) //&number=1
        .then((results) => {
          console.log(
            "Los resultados de la busqueda son: ",
            results.data.results
          );
          res.send(results.data.results);
        });
    } catch (error) {
      res.send(error);
      throw new Error("Error GET en el path/:id :", error);
    }
  } else {
    res.send("Entre a recipes pero sin valor en query.name");
  }
});

module.exports = router;
