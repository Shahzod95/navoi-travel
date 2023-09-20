const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class VirtualTour extends Model {}
VirtualTour.init({
  virtual_images:{
    type: DataTypes.JSON, 
    allowNull: false,
  },
  thumbnail :{
    type: DataTypes.JSON, 
    allowNull: false,
  }
}, { sequelize, timestamps:false, modelName: 'virtualtour' });

module.exports = {
    VirtualTour
}
