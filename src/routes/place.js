const express = require('express');
const placeController = require('../app/controllers/PlaceController');
const route = express.Router();

route.get("/create", placeController.create);
route.post("/save", placeController.save);
route.get("/:id/edit", placeController.edit);
route.get("/:id/del", placeController.del);
route.get("/:slug", placeController.detail);
route.get("/", placeController.index);

module.exports = route;