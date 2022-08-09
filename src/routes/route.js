const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const first = require('../logger/logger.js')
const second = require('../validator/formatter') 
const third = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    first.welcome()
    second.printDate()
    second.printMonth()
    second.getBatchInfo()
    third.Abc()
    
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason