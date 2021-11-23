var express = require("express");
var router = express.Router();
const axios = require("axios");
const { API_KEY, API_KEY2 } = process.env;

router.get("/:id", async (req, res) => {
  // LISTO
  const id = req.params.id;
  // console.log("El parametro pasado por URL es: " + id);
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`
    )
    .then((results) => {
      console.log(results.data);
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
    console.log(req.query.name);
    try {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&name=${queryData}&number=1`
        )
        .then((results) => {
          console.log(results.data.results);
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
