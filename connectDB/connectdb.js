import mongoose from "mongoose";


export const connectDB=async()=>{
       try {
            
        const connectURl=await mongoose.connect(`${process.env.MongoDBURl}/${process.env.DBS}`)
        if(connectURl)
        {
            console.log("connected dbs !");
        }
        
       } catch (error) {
          console.log("connection failed !",error);
          
       }
}