const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Restaurant = dbConnection.define('restaurant', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuisine: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    }
});



module.exports = Restaurant;
