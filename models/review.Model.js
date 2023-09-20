const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class Review extends Model {}
Review.init({
    description: {
        type: DataTypes.STRING,
        minlength: 50,
      },
      description_ru: {
        type: DataTypes.STRING,
        minlength: 50,
      },
      description_uz: {
        type: DataTypes.STRING,
        minlength: 50,
      },
      person_img: {
        type: DataTypes.STRING,
      },
      person_name: {
        type: DataTypes.STRING,
      },
      country_flag_code: {
        type: DataTypes.STRING,
      },
      country_name: {
        type: DataTypes.STRING,
      },
      country_name_ru: {
        type: DataTypes.STRING,
      },
      country_name_uz: {
        type: DataTypes.STRING,
      },
}, { sequelize, timestamps:false, modelName: 'review' });


module.exports = {
  Review
}

