import bookModel from '../models/bookModel.js'
import fs from 'fs'

//add books
const addBook = async(req,res)=>{
    let image_filename = `${req.files.bookcover[0].filename}`;
    let pdf_filename = `${req.files.pdf[0].filename}`;

    const book = new bookModel({
      title: req.body.title,
      authorId: req.body.authorId,
      author: req.body.author.split(','), // assuming author names are comma-separated in req.body.author
      publisher: req.body.publisher,
      description: req.body.description,
      category: req.body.category,
      bookcover: image_filename,
      pdf: pdf_filename
    })
    try {
        await book.save();
        res.json({success:true,message:"Book Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//All book list
const listBook = async(req,res)=>{
    try {
        const books = await bookModel.find({});
        res.json({success:true,data:books})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//Remove book
const removeBook = async(req,res)=>{
    try {
        const book = await bookModel.findById(req.body.id);
        fs.unlink(`uploads/${book.bookcover}`, ()=>{})
        fs.unlink(`uploads/${book.pdf}`, ()=>{}) // Also delete the PDF file

        await bookModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Book removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addBook,listBook,removeBook}
