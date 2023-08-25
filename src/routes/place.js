const express = require('express');
const placeController = require('../app/controllers/PlaceController');
const route = express.Router();

route.get("/", placeController.index);

module.exports = route;