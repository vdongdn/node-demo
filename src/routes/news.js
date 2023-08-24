const express = require('express');
const route = express.Router();
const newsController = require("../app/controllers/NewsController")

route.use("/:path", newsController.sport);

route.use("/", newsController.index);

module.exports = route;