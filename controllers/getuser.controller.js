import mongoose from "mongoose";
import { User } from "../models/user.model.js";
export const getUser=async(req,res)=>{
      const  useraRecords= await User.find({})
    //   console.log("data",useraRecords);
      
      if (useraRecords) {
        res.render('read',{'useraRecords':useraRecords});
      } else {
        res.render('read');
      }
    //   res.json(showAlUser)
      
}
