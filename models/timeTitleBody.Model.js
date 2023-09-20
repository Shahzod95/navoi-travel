const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class TimeTitleBody extends Model {}
TimeTitleBody.init({
    subject:{
        type:DataTypes.STRING
      },
      subject_ru:{
        type:DataTypes.STRING
      },
      subject_uz:{
        type:DataTypes.STRING
      },
      subject_description:{
        type:DataTypes.STRING
      },
      subject_description_ru:{
        type:DataTypes.STRING
      },
      subject_description_uz:{
        type:DataTypes.STRING
      }
}, { sequelize, timestamps:false, modelName: 'timetitlebody' });


module.exports = {
    TimeTitleBody
}

