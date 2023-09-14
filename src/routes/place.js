const express = require('express');
const placeController = require('../app/controllers/PlaceController');
const route = express.Router();
const AuthenMiddleware = require('../app/middlewares/AuthenMiddleware');

route.get("/create", placeController.create);
route.post("/save", placeController.save);
route.get("/getList",AuthenMiddleware, placeController.getAllPlacesJson);
route.get("/:id/edit", placeController.edit);
route.post("/del", placeController.del);
route.get("/:slug", placeController.detail);
route.get("/", placeController.index);

module.exports = route;