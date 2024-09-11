import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    user:{
        type:String, 
        required:true,
        minlength:3,
        maxLength:32,
    },
    text:{
        type:String,
        required:true,
        minlength:1,
        maxLength:255,
    },
    added:{
        type:Date,
        default:Date.now,
        
    }
})