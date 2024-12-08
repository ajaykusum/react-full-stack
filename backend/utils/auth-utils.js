const jwt = require('jsonwebtoken');
module.exports.authenticateLoginToken = function(req,res,next){
    const token = req.headers['authorization'];
    // console.log(req.headers);
    if (!token) {
        return res.status(403).json({
            'status': 'ERROR',
            'message': 'Please send login token in the Authorization header of the request'
        });
    }
    const tokenParts = token.split(' ');

    // Ensure it's a valid Bearer token
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(403).json({
            status: 'ERROR',
            message: 'Invalid token format, must be Bearer <token>'
        });
    }

    const tokenValue = tokenParts[1];
    try{
        let decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
        console.log(tokenValue);
        console.log(process.env.JWT_SECRET);
        console.log(decoded);
        if (decoded) {            
            req.body.email = decoded.email;
            req.body.password = decoded.password;
            return next();
        } else {
            return res.status(200).json({
                'status': 'ERROR',
                'message': 'login token not matched'
            });
        }
    }catch (e) {
        return res.status(200).json({
            'status': 'ERROR',
            'message': e.message || e.toString()
        });
    }
};
