const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');

const protect = asyncHandler( async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Obtener Token
            token = req.headers.authorization.split(' ')[1]; // Recibe el segundo elemento separadp por espacios

            // Vericar Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Obtener datos del usuario del mismo Token
            req.user = await User.findById(decoded.id).select('-password');

            next()

        } catch (e) {
            console.log(e);
            res.status(400);
            throw new Error('Token not valid');
        }

    }

    if(!token){
        res.status(401);
        throw new Error('Token no existe');
    }
});

module.exports = {
    protect
}
