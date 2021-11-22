const { API_KEY } = process.env;
async function getRecipes(numRecpies) {
  // ---------> Obtengo las 100 primeras recetas con todos sus datos
  var dataRecibida;
  // try {
  //   await axios
  //     .get(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${numRecpies}`
  //     )
  //     .then((results) => {
  //       const response = results.data;
  //       dataRecibida = results;
  //       res.send(response);
  //       // console.log(results);
  //     });
  //   // .then((data) => console.log(data));

  //   // console.log(results.data);
  // } catch (error) {
  //   console.log("ERROR al obtener todas las recetas en el path  ", "/");
  // } finally {
  //   return dataRecibida;
  //   // console.log(dataRecibida);
  // }
  // -------------------------------------------------------------
  //   try {
  //     let result = await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${numRecpies}`
  //     ); // Pido number cantidad de recetas
  //     let resolve = [];
  //     if (result.data.results) {
  //       result.data.results.map((item) => {
  //         let obj = RecipeFormater(
  //           item.id,
  //           item.title,
  //           item.spoonacularScore,
  //           item.image,
  //           item.diets
  //         );
  //         resolve.push(obj);
  //       });
  //       console.log(resolve);
  //       return resolve;
  //     }
  //   } catch (error) {
  //     console.log("ERROR al obtener todas las recetas en el path  ", "/");
  //   }
}

module.exports = getRecipes;
