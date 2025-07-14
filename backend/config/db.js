import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://dhanushree1629:mzlilzzz2005@cluster0.x8ro36l.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


