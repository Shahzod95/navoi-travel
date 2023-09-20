const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

class User extends Model {}
User.init({
  username: {
   type: DataTypes.STRING,
   minlength:3,
   require:true
  },
  password: {
    type:DataTypes.STRING,
    minlength:8,
    require:true,
  },
  isAdmin:{
    type: DataTypes.BOOLEAN,
    defaultValue:true,
  }
}, { sequelize, timestamps:false, modelName: 'user' });

module.exports = {
  User
}

