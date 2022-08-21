const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
// const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author_id = book.author
    let publisher_id = book.publisher
    let isValida = mongoose.Types.ObjectId.isValid(author_id)
    let isValidp = mongoose.Types.ObjectId.isValid(publisher_id)



    if (isValida === false) {
        return res.send("invalid author length ")
    } else if (isValidp === false) {
        return res.send("invalid publisher length id ")
    }

    let idOfAuthor = await authorModel.findById(author_id)
    let idOfPublisher = await publisherModel.findById(publisher_id)

    if (!idOfAuthor) {
        return res.send("this author dosent exist")
    } else if (!idOfPublisher) {
        return res.send("this publisher dosent exist")
    } else if (!idOfAuthor && !idOfPublisher) {
        return res.send("author and publisher both id's are invalid , please try with valid id ")
    } else {
        let bookCreated = await bookModel.create(book)
        res.send({ data: bookCreated })
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const getBooksWithAuthorId = async function (req, res) {
    let publisher_data = await publisherModel.find({name : ['Penguin', 'Bloomsbury', 'Saraswati House', 'HarperCollins']}).select({_id : 1})
    let Book = await bookModel.updateMany({publisher:publisher_data},{$set : {isHarCover : true , new :true}},{upsert: true})
     
    let author_data = await authorModel.find( {rating : {$gt:2}}).select({_id : 1})
    let rating1 = await bookModel.updateMany({author : author_data},{$inc : {price :200}},{upsert: true})

    res.send({data: Book , rating1})

}

 module.exports.createBook= createBook
 module.exports.getBooksData= getBooksData
 module.exports.getBooksWithAuthorId =getBooksWithAuthorId
