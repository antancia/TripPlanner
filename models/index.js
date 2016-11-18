// Export all models as well as db connection itself
const db = require('./_db');
const Hotel = require('./hotel');
const Place = require('./place');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
    db: db,
    Hotel: Hotel,
    Place: Place,
    Activity: Activity,
    Restaurant: Restaurant
};
