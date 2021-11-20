const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("intermediateTable", {
    recipie_key: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    diet_key: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
};
