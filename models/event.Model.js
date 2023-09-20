const { Model, DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');

class Event extends Model {}
Event.init({
  id:{
    type:Sequelize.UUID,
    defaultValue:Sequelize.UUIDV4,
    primaryKey:true,
  },
  title: {
   type: DataTypes.STRING,
   require:true
  },
  header_img: {
    type:DataTypes.TEXT,
    require:true,
  },
  description:{
    type: DataTypes.STRING,
    require:true,
  },
}, { sequelize, timestamps:false, modelName: 'event' });

module.exports = {
  Event
}