const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
// const underscore = require('underscore')
// const chanchal = require('lodash');

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
     
    // let weekend = { saturday, sunday }
    // let result = chanchal.first(weekend)
    // console.log("unserscore example result is", result);

    // let month = ['january', 'february', 'march', 'appril', 'may', 'jun', 'july', 'aug', 'september', 'october', 'november', 'december'];
    // let b = chanchal.chunk(month, 4);
    // console.log(b);

    // let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    // let c = chanchal.tail(odd);
    // console.log(c);

    // let arr1 = [1, 2, 2]
    // let arr2 = [3, 3, 4, 5]
    // let arr3 = [5, 5, 6]
    // let arr4 = [6, 6, 8]
    // let arr5 = [7, 7, 8, 9];
    // let d = chanchal.union(arr1, arr2, arr3, arr4, arr5);
    // console.log(d);

    // let pair = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutte Island"], ["fantasy", "Pans Labyrinth"]]
    // let e = chanchal.fromPairs(pair);
    // console.log(e);
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})

router.get('/movies', function(req,res){
    let movies = [RRR ,KGF , KGF Chapter 2 , Kota factory]
    res.send(movies)
})
module.exports = router;
// adding this comment for no reason