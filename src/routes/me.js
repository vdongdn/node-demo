const express = require('express');
const meController = require('../app/controllers/MeController');
const route = express.Router();

route.get("/my-place", meController.myPlace);

module.exports = route;