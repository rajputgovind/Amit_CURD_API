import { StatusCodes } from "http-status-codes";
import { crudModel } from "../Models/crudModel.js";
import jwt from "jsonwebtoken";
export async function savecrud(req,res){
    try{
        const data=crudModel(req.body);
        const save=await data.save();
        res.status(StatusCodes.OK).json(save);
    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"not save crud"})
    }
}
export async function fetchallcrud(req,res){
    try{
        
        const crud=await crudModel.find();
        res.status(StatusCodes.OK).json(crud);
    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"not fetchallcrud"})
    }
}
export async function updatecrud(req,res){
    try{
        
        await crudModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(StatusCodes.NO_CONTENT).json();
    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"not update crud"})
    }
}
export async function deletecrud(req,res){
    try{
        
        await crudModel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.NO_CONTENT).json();
    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"not delete crud"})
    }
}
export  function login(req,res){
    try{
        
        const user={
            id:1,
            username:"amit",
            password:"123"
        };
        const token=jwt.sign({user},'my_secret_key');
        res.json({token:token})
    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"not token generate"})
    }
}