import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
dotenv.config()
const app=express()

const connectMongoDb=async()=>{
    const connect=mongoose.connect(process.env.MONGODB_URI)
    if(connect){
        console.log("mongodb connected successfully")
    }

}
connectMongoDb();

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
})