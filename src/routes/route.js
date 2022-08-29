const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const cM = require('../middlewares/commonMiddlewares')

router.post('/createProduct', productController.createProduct)
router.post('/createOrder', orderController.createOrder)
router.post('/createUser' , cM.mid1 , userController.createUser)
router.post('/validateId', cM.mid1 , orderController.validateId)



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})












module.exports = router;