const {User}= require('../models')

class UserController {

    static async getUsers(req, res) {
        try {
            let users = await User.findAll()
            res.status(200).json(users)
        }
        catch(err) {
            res.status(400).json(err)
        }
    }

    static async getUser (req, res) {
        try {
            let id = req.params.id
            let user = await User.findByPk(id)
            res.status(200).json(user)
        }   
        catch(err) {
            res.status(404).json(err)
        }
    }

    static createUser(req,res) {
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
    
    static updateUser (req, res) {
        if (req.body.role == 1) {
            User.findOne({where : { role : 1}})
            .then(foundAdmin =>{
                if (!foundAdmin) {
                    User.update({
                        username : req.body.username, password : req.body.password, role: req.body.role
                    }, {where : {id : req.params.id}}, )
                    .then(updated => {
                        res.status(200).json(updated)
                    })
                    .catch(err => {
                        res.status(400).json(err)
                    })
                } else if (foundAdmin) {
                    res.status(400).json({message : 'Admin already exist you cannot be an admin'})
                }
            })
        } else {
            User.update({id : req.params.id,
                username : req.body.username, password : req.body.password
            }, {where : {id : req.params.id}}, )
            .then(updated => {
                res.status(200).json(updated)
            })
            .catch(err => {
                res.status(400).json(err)
            })
        }
    }

   static deleteUser (req,res) {
       let id = req.params.id
       User.findByPk(id)
       .then(user => {
           user.destroy()
           res.status(200).json(user)
       })
       .catch(err => {
           res.status(400).json(err)
       })
   }
}



module.exports = UserController