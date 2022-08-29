const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    pname : String ,
    category: String,
    price : Number

},{timestamps : true });

module.exports = mongoose.model('Product', productSchema)

