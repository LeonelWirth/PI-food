var express = require("express");
// const { default: Diets } = require("../../../client/src/components/Diets");
var router = express.Router();
const { Recipe, Diet } = require("../db");

router.post("/", async (req, res) => {
  const { title, image, summary, score, healthScore, steps, diet } = req.body;
  try {
    let recipeCreated = await Recipe.create({
      title,
      image,
      summary,
      score,
      healthScore,
      steps,
    });

    let dietDB = await Diet.findAll({
      where: {
        name: diet,
      },
    });

    // console.log("Lo que trae el find ALL", dietDB);

    for (let elem of dietDB) {
      await recipeCreated.addDiet(elem);
    }
    res.send(recipeCreated.title);
    // return await recipeCreated
    // .addDiet(dietDB)
    // .then((recipe) => res.send(recipe))
    // .catch((error) => res.send("Error: ", error));
  } catch (error) {
    throw new Error("Error en recipe: ", error);
  }
  // let { title, summary, score, healthScore, steps, image, diet } = req.body;
  // console.log(req.body);
  // // steps = steps.replace(/\[|\]/g, "").split(","); // El arreglo venia entre comillas entonces dejo el arreglo sin comillas para poder procesarlo
  // // diets = diets.replace(/\[|\]/g, "").split(","); // El arreglo venia entre comillas entonces dejo el arreglo sin comillas para poder procesarlo

  // if (title && summary) {
  //   try {
  //     let createRecipe = await Recipe.create({
  //       // id: id,
  //       title: title,
  //       summary: summary,
  //       score: score,
  //       healthScore: healthScore,
  //       steps: steps,
  //       image: image,
  //       // diets: diets,
  //     });
  //     console.log(createRecipe);

  //     let dietsDB = await Diet.findAll({
  //       where: {
  //         name: diet,
  //       },
  //     });
  //     await createRecipe.addDiet(dietsDB).then((recipe) => res.send(recipe));
  //     // res.send("Tabla de recetas: " + (await Recipe.findAll()));
  //   } catch (error) {
  //     res.send("Ocurrio un error en el post /recipes: " + error);
  //   } finally {
  //     console.log("Lo que devuelve: ", await Recipe.findAll());
  //   }
  // }
});
module.exports = router;
