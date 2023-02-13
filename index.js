import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crudRouter from "./src/Routers/crudRouter.js";
mongoose.set('strictQuery', false);

const app=express();
app.use(express.json());
app.use(cors());
app.use(crudRouter);
mongoose.connect("mongodb://127.0.0.1:27017/anita")
.then(()=>console.log("DATABASE CONNECTED"))
.catch(()=>console.log("NOT CONNECTED"))


app.listen(6000,()=>{
    console.log("server port on 6000");
})