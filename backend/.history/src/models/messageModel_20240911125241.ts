import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    user:{
        type:String, 
        required:true,
        minlength:3,
        maxeleng
    }
})