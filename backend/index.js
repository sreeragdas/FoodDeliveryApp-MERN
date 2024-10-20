import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
const app=express()
const port =4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoint
app.use("/api/food" ,foodRouter)
app.use("/images",express.static('upload'))


app.get("/" ,(req,res)=>{
    res.send("API working")
})
app.listen(port,()=>{
    console.log(`server started omn http://localhost:${port}`)
})