var express = require("express");
var router = express.Router();
const { Recipe, Diet } = require("../db");

router.get("/", async (req, res) => {
  let dietas = await Diet.findAll();
  let response = [];
  dietas.map((elem) => response.push(elem.dataValues.name));
  res.send(response);
  console.log(response);
});

module.exports = router;
