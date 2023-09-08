const Place = require("../models/Place");
const {multiMongooseToObject} = require('../../utils/mongoose')
const {mongooseToObject} = require('../../utils/mongoose')

class MeController {

    //[GET] /news
    async myPlace(req, res) {
        console.log("🚀:", req.query)
        try {
          let place = Place.find({});
          if (req.query.hasOwnProperty('_sort')) {
            place = place.sort({
                [req.query.column]: req.query.type
            });
          }
          place = await place.exec();
          res.render('me/my-place-list', {place: multiMongooseToObject(place)})
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new MeController;
