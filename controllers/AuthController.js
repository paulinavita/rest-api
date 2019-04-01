const {User} = require('../models')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class AuthController {

    static signIn (req, res) {
        User.findOne({where : {username : req.body.username}})
        .then(found => {
            if (found == null) res.status(400).json({ message : 'No such username'})
            else {
                if (found) {
                    console.log(found)
                    if(!bcrypt.compareSync(req.body.password, found.password) ) {
                        res.status(400).json({ message : 'Wrong password'})
                    } else {
                        let token = jwt.sign({id: found.id, username: found.username, role : found.role},
                            process.env.JWT_SECRET,
                            { expiresIn: '24h' }
                        );
                        res.status(200).json({
                            success: true,
                            message: 'Authentication successful',
                            token: token
                        });
                    }
                }
            }
        })
    }

    static signUp (req, res) {
        User.create({
            username : req.body.username,
            password : req.body.password
        })
        .then(created => {
            res.status(200).json(created)
        })
        .catch(err => {
            res.status(400).json(err)
        })  
    }
}

module.exports = AuthController