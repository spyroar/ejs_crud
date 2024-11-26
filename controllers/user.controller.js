import { User } from "../models/user.model.js";

User

const userController=(req,res)=>{
    res.render('index');;
}

// Create User for  register

 export const createUserController=async(req,res)=>{
    console.log(req.body);
    res.render('index')
    
 }

export {
     userController
}