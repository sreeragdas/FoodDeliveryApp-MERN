import mongoose from 'mongoose';

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://Geethaharidas10:Geethaharidas10@devcluster.3i7h5.mongodb.net/food-del').then(()=>{
        console.log('db connected')
    })
}