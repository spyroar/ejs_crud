import express from 'express'

const app=express();
const PORT=4000
app.get('/',(req,res)=>{
  res.send("Hello")
})
app.listen(PORT,()=>{
       console.log(`server is running on port ${PORT}`);
       
})