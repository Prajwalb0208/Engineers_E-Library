import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://engineerselibrary:eolfk6I66eVBZxZg@cluster0.urvg2l2.mongodb.net/e-library').then(()=>console.log("DB connected"));
}