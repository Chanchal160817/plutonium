const userModels = require("../models/userDocument")

const createUser = async function(req, res) {
    let data = req.body
    let saveData = await createUser.create(data)
    res.send({ msg: saveData })
}

module.exports.createUser = createUser