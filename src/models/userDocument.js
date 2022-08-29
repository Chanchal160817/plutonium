const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    balance: Number,
    registration : Number,
    address: String,
    age: Number,
    gender:String,
    isFreeAppUser:Boolean 
}, {timestamps : true });

module.exports = mongoose.model('New User', userSchema)