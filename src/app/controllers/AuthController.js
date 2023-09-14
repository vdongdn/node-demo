var jwt = require('jsonwebtoken');
class AuthController {

    //[POST] /getToken
    getToken(req, res) {
        try {
            const data = req.body;
            var token = jwt.sign({ data: data }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'});
            res.json({ token: token}); 
        } catch (error) {
            res.json({ error: error});
        }
    }
}
module.exports = new AuthController;
