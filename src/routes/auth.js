const express = require('express');
const route = express.Router();
const authController = require("../app/controllers/AuthController")

route.post("/", authController.getToken);

module.exports = route;