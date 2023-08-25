const express = require('express');
const siteController = require('../app/controllers/SiteController');
const route = express.Router();

route.post("/search", siteController.doSearch);
route.get("/search", siteController.search);

route.get("/", siteController.home);

module.exports = route;