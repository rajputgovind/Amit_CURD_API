import mongoose from "mongoose";

const crudSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true}
});

export const crudModel=new mongoose.model("crud",crudSchema);