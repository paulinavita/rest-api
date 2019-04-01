const jwt = require('jsonwebtoken');

module.exports = {
    authorized : function (req,res, next) {
        if (req.authenticatedUser.role == 1) {
            next()
        } else {
            res.status(401).json({
                message : 'You are unauthorized'
            })
        }

    }
}
