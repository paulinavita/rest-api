require('dotenv').config()
console.log(process.env.JWT_SECRET)
const express = require("express")
const app = express()
const routes = require("./routes")
var jwt = require('jsonwebtoken');

app.use(express.json())
app.use(express.urlencoded({extends: true}))

app.use("/", routes)

app.listen(3000)