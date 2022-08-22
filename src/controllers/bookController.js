const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
// const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author = book.author_id
    let publisher = book.publisher_id
    let isValida = mongoose.Types.ObjectId.isValid(author)
    let isValidp = mongoose.Types.ObjectId.isValid(publisher)
    
    
  
    if (isValida === false) {
        return res.send("please enter valid author id")
    } else if (isValidp === false) {
        return res.send("please enter valid publisher  id ")
    }

    let idfromauthor = await authorModel.findById(author)
    let idfromPublisher = await publisherModel.findById(publisher)



    if (!idfromauthor) {
        return res.send("this author dosent exist")
    } else if (!idfromPublisher) {
        return res.send("this publisher dosent exist")
    } else if (!idfromauthor && !idfromPublisher) {
        return res.send("author and publisher both id's are invalid , please try with valid id ")
    } else {
        let bookCreated = await bookModel.create(book)
        res.send({ data: bookCreated })
    }
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
   
    let data =   await publisherModel.find({name : ["Penguin","HarperCollins"]}).select({_id : 1})
    let bookid = await bookModel.updateMany({ publisher_id : data },{ $set : {isHardCover : true , new : true }},{upsert : true})

    let authorIds = await authorModel.find( { ratings : { $gt : 3.5 }}).select({_id : 1})
    let rating1 = await bookModel.updateMany({author_id : authorIds }, { $inc : {price :10 }},{upsert : true})
 
    res.send({ data: bookid , rating1})
  }
 module.exports.createBook= createBook
 module.exports.getBooksData= getBooksData
 module.exports. getBooksWithAuthorDetails = getBooksWithAuthorDetails
