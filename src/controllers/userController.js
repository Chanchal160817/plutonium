const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
try {
  
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.send({ msg: savedData });
  }
 catch (error) {
  console.log(error.message);
}
};
const loginUser = async function (req, res) {
try {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
  
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
} catch (error) {
  console.log(error.message);
}
};

const getUserData = async function (req, res) {
try {
  

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });

} catch (error) {
  console.log(error.message);
}
};

const updateUser = async function (req, res) {
try {
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: true, data: updatedUser });
} catch (error) {
  console.log(error.message);
}
};

const deleteUser = async function (req, res) {
try {
  
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.send({ status: false, message: "no such user exists" })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.send({ status: true, data: updatedUser })
  
} catch (error) {
  console.log(error.message);
}
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
