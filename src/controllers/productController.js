const productModels = require("../models/productDocument")

const createProduct = async function(req,res){
    let data = req.body
    let saveData = await createProduct.create(data)
    res.send(saveData)
}

module.exports.createProduct = createProduct