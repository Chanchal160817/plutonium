const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", function (req, res) {
//     let data = req.body
//     console.log(data)
//     res.send({msg : data})
// })

router.post("/createUser", UserController.createUser)

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;