const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class Travel extends Model {}
Travel.init({
  title: {
   type: DataTypes.STRING,
   required:true,
   minlength:3
  },
  title_ru: {
    type: DataTypes.STRING,
    required:true,
    minlength:3
   },
   title_uz: {
    type: DataTypes.STRING,
    required:true,
    minlength:3
   },
  header_img: {
    type:DataTypes.STRING,
    required:true,
  },
  price:{
    type: DataTypes.NUMBER,
    required: true
  },
  location:{
    type:DataTypes.STRING,
    required:true
  },
  location_ru:{
    type:DataTypes.STRING,
    required:true
  },
  location_uz:{
    type:DataTypes.STRING,
    required:true
  },
  durations:{
    type:DataTypes.STRING,
    required:true 
  },
  durations_ru:{
    type:DataTypes.STRING,
    required:true 
  },
  durations_uz:{
    type:DataTypes.STRING,
    required:true 
  },
  types:{
    type:DataTypes.STRING,
    required:true
  },
  types_ru:{
    type:DataTypes.STRING,
    required:true
  },
  types_uz:{
    type:DataTypes.STRING,
    required:true
  },
  description:{
    type:DataTypes.STRING,
    required:true,
    minlength:50,
  },
  description_ru:{
    type:DataTypes.STRING,
    required:true,
    minlength:50,
  },
  description_uz:{
    type:DataTypes.STRING,
    required:true,
    minlength:50,
  },
}, { sequelize, timestamps:false, modelName: 'travel' });

module.exports = {
  Travel
}
