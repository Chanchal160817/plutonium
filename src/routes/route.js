const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')

});
// problem 1 :-
router.get('/movies', function (req, res) {
    let movies = ['kgf', 'rrr', 'ddlj']
    res.send(movies)
})
// problem 2:-
router.get('/movies/:index', function (req, res) {
    let movies = ['kgf', 'rrr', 'ddlj']

    let requestParams = req.params
    let index = JSON.stringify(requestParams)
    let value = Object.values(requestParams)

    res.send(movies[value])
})

// problem 3:-
// router.get('/movies/:i', function (req, res) {
//     let movies = ['kgf', 'rrr', 'ddlj']

//     let requestParams = req.params.i
//     let index = JSON.stringify(requestParams)
//     let value = Object.values(requestParams)

//     if (i >= movies.length) {
//         res.send("Enter valid number ")
//     } else {
//         res.send(movies[i])

    //}

//})

// router.get('/movies/:indexNumber',function(req,res){
//     let movies = ['kgf', 'rrr', 'ddlj']
//     let index =req.params.indexNumber;
//     if(index>movie.length){
//         res.send("please enetr the valid index number")
//     }else{
//         res.send(movie[index])
//     }
// })

router.get('/movies/:i',function(req , res){
    let movies = ['DDLJ','MS.DHONI','KGH2', 'RRR']
        
        let requestParams = req.params  //
        let num= JSON.stringify(requestParams)
        let value=Object.values(requestParams)
        
        if(value >= movies.length ){
            res.send("Enter Valid Number")
        }else{
        res.send(movies[value])
        }
    })

    // problem 4 :-

router.get('/films', function (req, res) {
    let films = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
       ' id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]

    res.send(films)


})

// problem 5 :- 

router.get('/films/:filmsid', function (req, res) {
    let films = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
       ' id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]
    let requestParams = req.params
    let index = JSON.stringify(requestParams)
    let filmsid = Object.values(requestParams)
    res.send(films[filmsid])
})



module.exports = router;
// adding this comment for no reason