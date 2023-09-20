const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class HighLight extends Model {}
HighLight.init({
    en: {
   type: DataTypes.STRING,
   required:true,
   minlength:3
  },
    ru: {
    type: DataTypes.STRING,
    required:true,
    minlength:3
   },
    uz: {
    type: DataTypes.STRING,
    required:true,
    minlength:3
   },
}, { sequelize, timestamps:false, modelName: 'highlight' });

module.exports = {
    HighLight
}
