const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso

//  Voy a usar las ID de manera local, pero aun asi voy a agregar a la SB las APIid

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1, //  UUIDV1: A default unique universal identifier generated following the UUID v1 standard
      primaryKey: true,
    },
    // APIid: {
    //   type: DataTypes.BIGINT,
    //   // Si es nul puede ser una receta inventada, por eso no lo agrego
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumenDelPlato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntuacion: {
      type: DataTypes.FLOAT,
    },
    nivelDeComidaSaludable: {
      type: DataTypes.STRING,
    },
    pasoAPaso: {
      type: DataTypes.STRING,
    },
  });
};
