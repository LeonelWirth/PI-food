var express = require("express");
var router = express.Router();
const { Recipe, Diet } = require("../db");

router.post("/", async (req, res) => {
  let { title, summary, score, healthScore, steps, image, diets } = req.body;
  console.log(req.body);
  // steps = steps.replace(/\[|\]/g, "").split(","); // El arreglo venia entre comillas entonces dejo el arreglo sin comillas para poder procesarlo
  // diets = diets.replace(/\[|\]/g, "").split(","); // El arreglo venia entre comillas entonces dejo el arreglo sin comillas para poder procesarlo
  if (title && summary) {
    try {
      let createRecipe = await Recipe.create({
        // id: id,
        title: title,
        summary: summary,
        score: score,
        healthScore: healthScore,
        steps: steps,
        image: image,
        // diets: JSON.parse(diets),
      });
      console.log(createRecipe);
      res.send("Tabla de recetas: " + (await Recipe.findAll()));
    } catch (error) {
      res.send("Ocurrio un error en el post /recipes: " + error);
    }
  }
});
module.exports = router;
