const Place = require("../models/Place");
const {multiMongooseToObject} = require('../../utils/mongoose')
const {mongooseToObject} = require('../../utils/mongoose')

class MeController {

    //[GET] /news
    async myPlace(req, res) {
        try {
          let place = await Place.find({}).sortable(req);
          res.render('me/my-place-list', {place: multiMongooseToObject(place)})
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new MeController;
