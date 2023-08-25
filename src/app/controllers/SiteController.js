const Place = require("../models/Place");

class SiteController {

    //[GET] /
    home(req, res) {
        res.render('home')
    }

    //[GET] /search
    search(req, res) {
        res.render('search', { obj: req.query })
    }

    //[POST] /search
    async doSearch(req, res) {
        try {
            const p = await Place.findOne({ title: { $regex: req.body.q, $options: 'i' } });
            res.render('search', { result: p.title })
        } catch (error) {
            res.render('search', { result: 'Nỏ tìm thấy' })
            res.render('search', { result: 'Nỏ tìm thấy' })
        }
    }
}
module.exports = new SiteController;
