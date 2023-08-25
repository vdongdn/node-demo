const Place = require("../models/Place");

class PlaceController {

    //[GET] /news
    async index(req, res) {
        try {
          const place = await Place.find({});
          var _place = place.map(item => item.toObject());
          res.render('place', {place: _place})
        } catch (error) {
            console.log("🚀 ~ file: PlaceController.js:11 ~ PlaceController ~ index ~ 'errr':", 'errr')
        }
    }   
}
module.exports = new PlaceController;
