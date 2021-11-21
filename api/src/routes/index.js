// const { Router } = require("express");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const router = Router();

var express = require("express");
var router = express.Router();

// Acuerdense de agregar su router o cualquier middleware que necesiten aca
// to enable parsing of json bodies for post requests
router.use(express.json()); //Middleware!!!

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) => {
  res.send("Estoy vivo");
});

// router.get("/recipies", (req, res) => {
//   if (req.params) {
//   }
//   // res.send("Estoy vivo");
// });

module.exports = router;
