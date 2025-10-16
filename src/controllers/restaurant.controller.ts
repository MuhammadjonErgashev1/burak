import  {Request , Response } from 'express';
import {T} from "../libs/types/common"
import MemberService from '../models/member.service';

const restauranController: T = {};
restauranController.goHome = (eq: Request, res: Response)=>{
    try
    {
        //logic, service model
        console.log("goHome");
        res.send("home page");
        // send, json, redirect, end, render
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.getLogin = (eq: Request, res: Response)=>{
    try
    {
        console.log('getLogin');
        res.send("login page");
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.getSignup = (eq: Request, res: Response)=>{
    try
    {
        res.send("Signup page")
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};

restauranController.processLogin = (eq: Request, res: Response)=>{
    try
    {
        console.log('processLogin')
        res.send("done")
        
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.processSignup = (eq: Request, res: Response)=>{
    try
    {
        console.log('processSignup ')
        res.send("done")
        
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};

export default restauranController;
