const { DataTypes, Sequelize, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alturaMetric: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alturaImperial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pesoImperial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pesoMetric: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    timestamps:false
  });
  sequelize.define('Temperamentos',{
    ID:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
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
