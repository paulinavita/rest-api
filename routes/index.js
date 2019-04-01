const express = require('express')
const router = require("express").Router()
const userRoutes = require('./user/users')
const {signIn, signUp} = require('../controllers/AuthController')
const {authenticated, authorized} = require('../middleware')

router.post('/api/signin', signIn)
router.post('/api/signup', signUp)
router.use('/api', authenticated, userRoutes)

module.exports = router