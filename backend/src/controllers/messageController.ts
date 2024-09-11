import Message from "../models/messageModel";
import mongoose from "mongoose";
import  {Request, Response} from "express";
import { z } from "zod";
// @desc Get messages
// @route GET /messages
// @access public 
export const  getMessage = async (req:Request, res:Response) =>{
    try{
        const messages = await Message.find({}).select("user text added _id");
        return res.status(200).json(messages.reverse());
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"interval server error"});
    }
}

 const messageSchema = z.object({
    user:z
    .string()
    .min(3, {message:"User name must contain at least 3 character(s)"})
    .max(32,{message:"User name cannot excess 32 characters"}),
    text:z
    .string()
    .min(3,{message:"Message must contain at least 3 characters"})
    .max(255,{message:"Message can't be longer than 255 characters"})
});

// @desc Get messages
// @route POST /messages
// @access public 
export const postMessage = async (req:Request, res:Response) => {
    const {user, text} = req.body;
    const result = messageSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({error:result.error.errors})
    }
    try{
        const newMessage = await Message.create({user:user, text:text});
        if(!newMessage){
            return res.status(400).json({message:"failed to create a message"});
        }

        await newMessage.save();
        res.status(200).json({
            newMessage,
            message:"Message created successfully"
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Interval server error"});
    }
}

