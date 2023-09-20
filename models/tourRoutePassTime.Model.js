const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class TourRoutePassTime extends Model {}
TourRoutePassTime.init({
    time:{
        type:DataTypes.STRING,
      },
    time_header_title:{
        type:DataTypes.STRING,
    },
    time_header_title_ru:{
        type:DataTypes.STRING,
    },
    time_header_title_uz:{
        type:DataTypes.STRING,
    },
}, { sequelize, timestamps:false, modelName: 'tourroutepasstime' });


module.exports = {
    TourRoutePassTime
}

