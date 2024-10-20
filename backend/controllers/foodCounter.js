import foodModel from "../models/foodModel.js";
import fs from 'fs';
import mongoose from "mongoose";


const addFood= async(req,res)=>{
    let image_filename=`${req.file.filename}`
    const food=new foodModel({
        name:req.body.name,
        discription:req.body.discription,
        price:req.body.price,
        image:image_filename,
        category:req.body.category

    })
    try{
        await food.save();
        res.json({success:true,message:'food added'})
    }catch(error){
        console.log(error)
        res.json({success:fail,message:'food not added'})

    }
}

//all food list

const listFood=async(req,res)=>{
    try{
        const food=await foodModel.find({}); //fetch all the food data from database
        res.json({success:true,message:food})
    }catch(error){
        console.log(error)
        res.json({success:fail,message:'food not added'})

    }
}

//remove food item
const removefood = async(req,res) =>  {
     const id = req.params.id;



    if (!mongoose.Types.ObjectId.isValid(id) ) {
         return res.status (400).json( { success: false, message:'Imvalid ID'})
    }

    try{
        const food=await foodModel.findById(id) // find the food from the model 
        if(!food){
            return res.status(404).json(res.json({success:fail,message:'food not found'}))
        }

        console.log(food ,'lll')
        fs.unlink(`upload\${food.image}`,()=>{})  // delete the image from upload folder
        await foodModel.findByIdAndDelete(id) // find the food from the mongoose and delete 
        res.json({success:true,message:'food deleted'})
    }catch(error){
        console.log(error)
        res.json({success:fail,message:'food not added'})

    }

}
export {addFood , listFood ,removefood}