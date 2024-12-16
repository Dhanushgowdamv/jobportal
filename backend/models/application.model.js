import mongoose from "mongoose";

 const applicationSchema  = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    appliction:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        enum:['pending','accepting','reject'],
        default:"pending",
        

    }
 },{timestamps:true})

 export const Application = mongoose.model("Application", applicationSchema);
