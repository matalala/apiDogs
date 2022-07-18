const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps:false
  });
};
