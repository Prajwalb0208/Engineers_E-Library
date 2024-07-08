import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import bookRouter from "./routes/bookRoute.js"


//app config
const app =express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/book",bookRouter)
app.use("/images",express.static('uploads   '))

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://engineerselibrary:eolfk6I66eVBZxZg@cluster0.urvg2l2.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0