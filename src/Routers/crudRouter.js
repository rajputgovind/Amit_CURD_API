import express from "express";
import { deletecrud, fetchallcrud, login, savecrud, updatecrud } from "../Controllers/crudController.js";

const crudRouter=express.Router();
crudRouter.post("/crud",savecrud);
crudRouter.get("/crud",fetchallcrud);
crudRouter.put("/crud/update/:id",updatecrud);
crudRouter.delete("/crud/delete/:id",deletecrud);
crudRouter.post("/login",login);


export default crudRouter;