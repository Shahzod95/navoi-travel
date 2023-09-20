const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class News extends Model {}
News.init({
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
   sub_title: {
    type: DataTypes.STRING,
    minlength:3
   },
   sub_title_ru: {
     type: DataTypes.STRING,
     minlength:3
    },
    sub_title_uz: {
     type: DataTypes.STRING,
     minlength:3
    },
    main_img:{
    type:DataTypes.STRING,
    required:true
  },
   description:{
    type:DataTypes.TEXT,
    required: true,
    minlength:20
   },
   description_ru:{
    type:DataTypes.TEXT,
    required: true,
    minlength:20
   },
   description_uz:{
    type:DataTypes.TEXT,
    required: true,
    minlength:20
   },
   img_list:{
    type: DataTypes.JSON, 
    allowNull: false,
   }
}, { sequelize, modelName: 'news' });

module.exports = {
    News
}
