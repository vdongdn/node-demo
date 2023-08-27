const Place = require("../models/Place");
const {multiMongooseToObject} = require('../../utils/mongoose')
const {mongooseToObject} = require('../../utils/mongoose')

class MeController {

    //[GET] /news
    async myPlace(req, res) {
        try {
          const place = await Place.find({});
          res.render('me/my-place-list', {place: multiMongooseToObject(place)})
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new MeController;
