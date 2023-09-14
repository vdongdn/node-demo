var jwt = require('jsonwebtoken');
module.exports = function AuthenMiddleware(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    const token  = authorizationHeader ? authorizationHeader.split(' ')[1] : null;
    if (!token) {
        return res.status(401).json({message: 'No token provided'});
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({message: 'Invalid token'});
        }
        next();
    });
}