
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class Point extends Model {}
Point.init({
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
  latlon: {
    type:DataTypes.STRING,
    required: true
  },
  url:{
    type: DataTypes.STRING,
    required: true
  },
  address:{
    type:DataTypes.STRING,
    required:true,
    minlength: 8
  },
  address_ru:{
    type:DataTypes.STRING,
    required:true,
    minlength: 8
  },
  address_uz:{
    type:DataTypes.STRING,
    required:true,
    minlength: 8
  },
  history:{
    type:DataTypes.STRING,
    required:true,
    minlength: 20
  },
  history_ru:{
    type:DataTypes.STRING,
    required:true,
    minlength: 20
  },
  history_uz:{
    type:DataTypes.STRING,
    required:true,
    minlength: 20
  },
  main_img_url:{
    type: DataTypes.STRING, 
    allowNull: false,
  },
  video_url:{
    type: DataTypes.STRING,
  },
  year:{
    type:DataTypes.DATE,
    required:true
  },
  visible:{
    type:DataTypes.BOOLEAN,
    default: true
  }
}, { sequelize, timestamps:false, modelName: 'point' });

module.exports = {
  Point
}
