const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class Position extends Model {}
Position.init({
  ip_address: {
   type: DataTypes.STRING,
  },
  loc:{
    type: DataTypes.STRING
  },
  country:{
    type: DataTypes.STRING
  }
}, { sequelize, modelName: 'position' });

module.exports = {
    Position
}
