const moment = require('moment');
const timing = require('moment');
const { cU } = require('../controllers/userController');
const createUser =   function (req, res, next) {
   
    let dmy = moment().format('DD-MM-YYYY, HH:mm:ss');
    let ipAddress = req.ip;
    let url = req.originalUrl
    console.log( dmy  +"," + ipAddress +"," + url);
    next()
}
module.exports.createUser= createUser


  