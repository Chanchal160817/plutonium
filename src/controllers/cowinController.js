let axios = require("axios")
let getLondanTemp =async function(req,res){

        try {
            let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            let cityObjArray =[]

        for (let i = 0; i < cities.length; i++) {
            let object= { city : cities[i]}
            let url = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=5cc42eb5f2bdd96470675caebd4bc027
            `)
            console.log(url.data.main.temp);
            object.temp = url.data.main.temp
            cityObjArray.push(object)
            }

            let sorted = cityObjArray.sort(function(a ,b){return a.temp-b.temp})
            console.log(sorted);
            res.status(200).send({status : true , data: sorted})
        } catch (error) {
            console.log(error.message);
            res.status(500).send({status:false , msg: 'server error'})
        }

};
module.exports.getLondanTemp = getLondanTemp