const router = require("express").Router()
const UserController = require('../../controllers/UserController')
const {authenticated, authorized, authorizedUser} = require('../../middleware')

router.get('/users', authorized, UserController.getUsers)
router.get('/users/:id',authorizedUser, UserController.getUser)

router.post("/users", authorized, UserController.createUser)
router.delete('/users/:id', authorized, UserController.deleteUser)
router.put('/users/:id',authorizedUser, UserController.updateUser)


module.exports = router
