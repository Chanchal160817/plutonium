const express = require('express');
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

let person =[
    {
        name : "pk",
        age :12,
        votingStatus : false
    },
    {
        name : "sk",
        age :22,
        votingStatus : true
    },
    {
        name : "AA",
        age :72,
        votingStatus : false
    },
    {
    name : "Sc",
    age :5,
    votingStatus : false
    },
    {
    name : "HO",
    age :42,
    votingStatus : true
    }]
     
    router.post('/voting' , function (req, res ) {
        let VotingAge = req.query.age
        let ElegiblePerson = []
        for (let i=0; i<person.length; i++)
        {
            if(person[i].age>VotingAge){
                person[i].votingStatus= true;
                ElegiblePerson.push(person[i])
     
            }
        }
        res.send({persons: ElegiblePerson , status:true})
    // inputAge = req.query.votingAge;
    // person.map(per=>(per.age>inputAge)?per.votingStatus=true:per.votingStatus);
    // let final=person.filter(pson=>{if(pson.votingStatus==true){return pson.name}});
    // res.send({data:final});
     
    })
    
    
    
    
    
    
    
    
    module.exports = router;
    
    
    


module.exports = router;