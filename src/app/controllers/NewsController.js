
class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news')
    }   
    
    //[GET] /news/:path
    sport(req, res) {
        res.send(req.params.path)
    }
}
module.exports = new NewsController;
