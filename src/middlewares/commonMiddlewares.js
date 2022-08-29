
const mid1= function ( req, res, next) {
    let order = req.header.isFreeAppUser
    if(!order){
        res.send("missing header is mandatory")
    }
    else next()
}



module.exports.mid1= mid1

