const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id:{
      type: DataTypes.INET,
      primaryKey:true
    },
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
  sequelize.define('Temperamento',{
    ID:{
      type: DataTypes.INET,
      primaryKey:true
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    timestamps:false
  });
};
