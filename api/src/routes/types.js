var express = require("express");
var router = express.Router();
const { Diet } = require("../db");

router.get("/", async (req, res) => {
  try {
    let dietas = await Diet.findAll();
    let response = [];
    dietas.map((elem) => response.push(elem.dataValues.name));
    res.send(response);
  } catch (error) {
    throw new Error("Error en types: ", error);
  }
  // console.log(response);
});

module.exports = router;
