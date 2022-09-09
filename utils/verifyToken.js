const jwt = require("jsonwebtoken");
const createError = require("./createError");

const verifyToken = (req, res, next) => {
    try {
        const tokenToVerify = req.cookies.access_token;
        
        if (!tokenToVerify) {
            return next(createError(401, "You are not authorized!"));
        }
        
        jwt.verify(tokenToVerify, process.env.jwt_secret, (err, user) => {
            if (err) return next(createError(403, "Invalid token"));
            req.user = user;
            next()
        })
    }
    catch (err){
        next(err)
    }
}

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return next(createError(403, "Authorization Failed"))
        }
    })
}

module.exports = {verifyToken, verifyUser} 