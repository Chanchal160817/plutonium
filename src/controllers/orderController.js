const orderModels = require("../models/orderDocument")
const  userModels = require("../models/userDocument")
const productModels = require("../models/productDocument")

const createOrder = async function(req,res){
    let data = req.data
    let saveData = await createOrder.create(data)
    res.send({msg: saveData})
}

const validateId = async function(req,res){
    let userid = req.body.user_id
    let productid = req.body.product_id

    if (!userid&&!productid) {
      return  res.send({msg: "This File is mandatory !!!"})
    }
    else if (!userid){
        return res.send({msg : "User id is mandatory"})
    }
    else if (!productid){
        return res.send({msg: "Product id is mandatory"})
    }
    let isFreeAppUser = req.header.isfreeappuser
    console.log(isFreeAppUser);

    if(isFreeAppUser==true){
        let data = req.body 
        data["amount"] = 0 
        let free = await orderDocument.create(data)
        console.log(free);
        return res.send(free)
    }
    else if (isFreeAppUser!==true){
        let userMoney = await userDocument.findById(user_id).select({balance : 1,_id :0})
        let productMoney = await productDocument.findById(product_id).select({price:1, _id :0})
        let userBalance = userMoney.balance
        let productBalance = productMoney.price

        if (userBalance>productBalance) {
            let newUserBalance =  userBalance-productBalance
            console.log(newUserBalance);
            let updateData = await userDocument.findByIdAndUpdate({id:user_id },{$set :{balance:newUserBalance}})
            console.log(updateData);

            let data = req.body
            data["amount"]= productBalance
            data["isFreeAppUser"] = false

            let free = await orderDocument.create(data)
            res.send(free)
        }else {
            res.send({msg :" Insufficient balance"})
        }

    }

}
module.exports.createOrder = createOrder
module.exports.validateId = validateId