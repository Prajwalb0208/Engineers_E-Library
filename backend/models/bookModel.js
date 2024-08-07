import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bookcover: { type: String, required: true },
  pdf: { type: String, required: true },
  author: { type: [String], required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price:{type:Number, required:true},
});

const bookModel = mongoose.models.book || mongoose.model("Book", bookSchema);

export default bookModel;