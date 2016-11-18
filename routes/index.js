const express = require('express');
const router = express.Router();
const models = require('../models');
const Promise = require('bluebird');

var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

module.exports = router;

router.get('/', function (req, res, next) {

    var findingHotels = Hotel.findAll({});
    var findingActivities = Activity.findAll({});
    var findingRestaurants = Restaurant.findAll({});

    Promise.all([findingHotels, findingActivities, findingRestaurants])
      .spread(function(hotels, activities, restaurants) {
          res.render('index', {
            hotels: hotels,
            activities: activities,
            restaurants: restaurants
          });
      });


});
