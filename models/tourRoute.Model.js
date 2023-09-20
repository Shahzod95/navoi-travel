const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class TourRoute extends Model {}
TourRoute.init({
    title:{
        type:DataTypes.STRING
      },
      title_ru:{
        type:DataTypes.STRING
      },
      title_uz:{
        type:DataTypes.STRING
      },
      img_list:{
        type: DataTypes.JSON, 
        allowNull: false,
      }
}, { sequelize, timestamps:false, modelName: 'tourroute' });


module.exports = {
    TourRoute
}

