import mongoose from "mongoose"

const foodSchema = mongoose.Schema({
    
    name:{type:String, required:true},
    discription:{type:String},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true},
})

const foodModel=mongoose.model.food || mongoose.model('food',foodSchema)

export default foodModel;