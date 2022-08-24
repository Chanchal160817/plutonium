const express = require('express');
const router = express.Router();

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

const UserModel= require("../model/userModel.js")
const UserController= require("../controller/userController")
 
router.post("/createBook",UserController.createBook )
 
router.get("/getBooksData", UserController.getBooksData)
 
module.exports = router;

    


