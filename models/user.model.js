import { name } from "ejs";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
      name:{
         type:String,
         required:true
      },
      city:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true   
     },
     phone_Number:{
        type:String,
        required:true
     }
})

export const User=mongoose.model("User",userSchema) 