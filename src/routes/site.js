const express = require('express');
const siteController = require('../app/controllers/SiteController');
const route = express.Router();

route.post("/search", siteController.doSearch);
route.use("/search", siteController.search);

route.use("/", siteController.home);

module.exports = route;