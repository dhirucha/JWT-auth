const jwt = require('jsonwebtoken');


const jwtAuth = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null;

    if(!token){
        res.status(400).json({
            success: false,
            message: "Not authorized"
        })
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email}
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }

    next();
}


module.exports = jwtAuth;