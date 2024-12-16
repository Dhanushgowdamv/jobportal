import mongoose from "mongoose";

const connectdb = async()=>{
    try{
   await mongoose.connect(process.env.MONGO_URI)
    console.log("mongo db is connected sucessfully")
    }catch (error){
     console.log("error in the connection",error)
    }
}

export default connectdb;