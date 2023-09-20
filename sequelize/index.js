const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });
  //update database
  // sequelize.sync({force:true});
  sequelize.sync()
  
module.exports = {
    sequelize
}