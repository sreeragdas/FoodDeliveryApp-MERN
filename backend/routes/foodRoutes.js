import express from 'express'
import multer from 'multer';

import { addFood,listFood,removefood } from '../controllers/foodCounter.js';

const foodRouter=express.Router()


const storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})


foodRouter.post("/add" ,upload.single("image") ,addFood)
//here upload will be the folder name where we can upload the images

foodRouter.get('/list' ,listFood)

foodRouter.delete('/remove/:id',removefood)

export default foodRouter;