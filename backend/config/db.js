import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:9053105920@cluster0.gsgpz3f.mongodb.net/food_del').then(()=>console.log("DB Connected"));
}