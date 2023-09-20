const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class Hotel extends Model {}
Hotel.init({
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
  room: {
    type:DataTypes.STRING,
    required:true,
  },
  room_ru: {
    type:DataTypes.STRING,
    required:true,
  },
  room_uz: {
    type:DataTypes.STRING,
    required:true,
  },
  types:{
    type: DataTypes.STRING,
  },
  types_ru:{
    type: DataTypes.STRING,
  },
  types_uz:{
    type: DataTypes.STRING,
  },
  img_url:{
    type:DataTypes.STRING,
    required:true
  },
}, { sequelize, timestamps:false, modelName: 'hotel' });

module.exports = {
  Hotel
}
