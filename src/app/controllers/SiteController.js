class SiteController {

    //[GET] /
    home(req, res) {
        res.render('home')
    }   
    
    //[GET] /search
    search(req, res) {
        res.render('search', {obj: req.query})
    }
    
    //[POST] /search
    doSearch(req, res) {
        res.render('search', {obj: req.body})
    }
}
module.exports = new SiteController;
