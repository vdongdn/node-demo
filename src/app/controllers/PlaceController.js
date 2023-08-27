const Place = require("../models/Place");
const {multiMongooseToObject} = require('../../utils/mongoose')
const {mongooseToObject} = require('../../utils/mongoose')

class PlaceController {

    //[GET] /news
    async index(req, res) {
        try {
          const place = await Place.find({});
          res.render('place/list', {place: multiMongooseToObject(place)})
        } catch (error) {
            console.log("🚀 ~ file: PlaceController.js:11 ~ PlaceController ~ index ~ 'errr':", 'errr')
        }
    }

    //[GET] /place/:slug
    async detail(req, res) {
        try {
          const place = await Place.findOne({slug: req.params.slug});
          res.render('place/placedetail', {place: mongooseToObject(place)})
        } catch (error) {
            console.log(error);
        }
    }   
    //[GET] /place/create
    create(req, res) {
        res.render('place/create')
    } 

    //[GET] /place/:id/edit
    async edit(req, res) {
        try {
            const place = await Place.findById(req.params.id);
            res.render('place/edit', {place: mongooseToObject(place)})
        } catch (error) {
            console.log(error);
        }
    } 
        
    //[GET] /place/:id/del
    del(req, res) {
        
    } 

    //[POST] /place/save
    async save(req, res) {
        try {
            const placeId = req.body._id;
            if (!placeId) {
                const place = new Place(req.body);
                place.status = 1;
                const result =  await place.save();
                if (result) {
                    res.redirect('/place');
                }
            } else {
                let {_id, ...newbody} = req.body;
                const result =  await Place.findByIdAndUpdate(req.body._id, newbody)  
                if (result) {
                    res.redirect('/me/my-place');
                }
            }
        } catch (error) {
            res.json(req.body)
        }
    }
}
module.exports = new PlaceController;
