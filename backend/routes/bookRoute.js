import express from "express"
import multer from "multer"
import { addBook, listBook, removeBook } from "../controllers/bookController.js"

const bookRouter = express.Router();

// Image and PDF storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

bookRouter.post("/add", upload.fields([{ name: 'bookcover', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), addBook)
bookRouter.get("/list", listBook)
bookRouter.post("/remove", removeBook);

export default bookRouter;
