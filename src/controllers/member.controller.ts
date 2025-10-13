import  {Request , Response } from 'express';
import {T} from "../libs/types/common"

const memberController: T = {};
memberController.goHome = (eq: Request, res: Response)=>{
    try
    {
        res.send("home page")
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
memberController.getLogin = (eq: Request, res: Response)=>{
    try
    {
        res.send("login page")
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
memberController.getSignup = (eq: Request, res: Response)=>{
    try
    {
        res.send("Signup page")
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};

export default memberController;
