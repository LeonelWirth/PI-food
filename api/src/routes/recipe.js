var express = require("express");
var router = express.Router();
const { Recipe, Diet } = require("../db");

router.post("/", async (req, res) => {
  let { title, summary, score, healthScore, steps, image, diets } = req.body;
  if (title && summary && score && healthScore && steps && image && diets) {
    try {
      await Recipe.create({
        // id: id,
        title: title,
        summary: summary,
        score: score,
        healthScore: healthScore,
        steps: steps,
        image: image,
        diets: diets,
      });
      // console.log(await Recipe.findAll());
      res.send("Tabla de recetas: " + (await Recipe.findAll()));
    } catch (error) {
      // throw new Error("Fallo al setear una nueva receta");
      res.send("Ocurrio un error en el post /recipes: " + error);
    }
  }
});
module.exports = router;
