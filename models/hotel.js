const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Hotel = dbConnection.define('hotel', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    num_stars: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    amenities: {
      type: Sequelize.TEXT,
      allowNull: false
    }
});



module.exports = Hotel;
