const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

async function setDefaultDiets() {
  let defaultDiets = [
    { name: "Gluten Free" },
    { name: "Ketogenic" },
    { name: "Vegetarian" },
    { name: "Lacto-Vegetarian" },
    { name: "Ovo-Vegetarian" },
    { name: "Vegan" },
    { name: "Pescetarian" },
    { name: "Paleo" },
    { name: "Primal" },
    { name: "Low FODMAP" },
    { name: "Whole30" },
  ];
  Diet.bulkCreate(defaultDiets); //bulkCreate crea e inserta en la db
}

async function setRecipe(data) {
  if (
    data &&
    data.id &&
    data.title &&
    data.summary &&
    data.score &&
    data.healthScore &&
    data.steps &&
    data.image &&
    data.diets
  ) {
    try {
      await Recipe.create({
        id: data.id,
        title: data.title,
        summary: data.summary,
        score: data.score,
        healthScore: data.healthScore,
        steps: data.steps,
        image: data.image,
        diets: data.diets,
      });
    } catch (error) {
      throw new Error("Fallo al setear una nueva receta");
    }
  }
}

module.exports = {
  setDefaultDiets,
  setRecipe,
};
