import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import Bus from "./Models/Buses.js";
// import Booking from "./Models/Booking.js";
dotenv.config()
const app=express()
app.use(express.json());


const connectMongoDB= async()=>{
    const response=await mongoose.connect(process.env.MONGODB_URI)
    if(response){
        console.log('mongo db connected successfully')
    }
}
connectMongoDB();
app.post("/api/buses",async(req , res)=>{
    const { busno,seats, busname}=req.body;
    const bus=new Bus({ busno,seats, busname})
    try{
        const savedbus= await bus.save()
       return res.status(201).json({
        success:true,
        data:savedbus,  
        message:'bus data post successfully'
    })
    }
    catch(err){
     return res.json({
            success:false,
            message:err.message
        })
    }


})

app.get("/api/buses",async(req,res)=>{
    const allbuses=await Bus.find()
    res.status(200).json({
        success:true,
        data:allbuses,
        message:"all buses found successfully"
    })
})

app.put("/api/buses/:_id", async (req,res)=>{
    const {_id}=req.params
    const { busno,seats, busname}=req.body;
   await Bus.updateOne({_id:_id} , {$set:{
    busno:busno, seats:seats , busname:busname
   }})
    
    const updatedbus=await Bus.findOne({_id:_id})
    return res.status(201).json({
        success:true,
        data:updatedbus,
        message:"data updated successfully"
    })
    
   

    
 
})

app.patch("/api/buses/:_id", async (req,res)=>{
    const {_id}=req.params
    const {seats}=req.body;
   await Bus.updateOne({_id:_id} , {$set:{
     seats:seats 
   }})
    
    const updatedbus=await Bus.findOne({_id:_id})
    return res.status(201).json({
        success:true,
        data:updatedbus,
        message:"data updated successfully"
    })
    
})

app.delete("/api/buses/:_id", async(req,res)=>{
    const {_id}=req.params
    await Bus.deleteOne({_id:_id})
    res.status(204).json({
        success:true,
        message:"data deleted successfully"
    })


})

const PORT=8080
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})