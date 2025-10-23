import  {Request , Response } from 'express';
import {T} from "../libs/types/common"
import MemberService from '../models/member.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restauranController: T = {}; // define
restauranController.goHome = (req: Request, res: Response)=>{
    try
    {
        //logic, service model
        console.log("goHome");
        res.render("home");
        // send, json, redirect, end, render
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.getLogin = (req: Request, res: Response)=>{
    try
    {
        console.log('getLogin');
       res.render("login");
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.getSignup = (req: Request, res: Response)=>{
    try
    {
       res.render("signup");
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};

restauranController.processSignup = async (req: AdminRequest, res: Response)=>{
    try
    {
        console.log('processSignup ')
        console.log("body:", req.body)
        
        const input: MemberInput = req.body;
        input.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService()
        const result= await memberService.processSignup(input);
        //TODO sessions authentications

        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        })


        
        
    }
    catch(err){
        console.log("Error, goHome", err);
        res.send(err);
    }
};

console.log("processLogin ishladi");
restauranController.processLogin = async(req: AdminRequest, res: Response)=>{
    try
    {
        console.log('processLogin');
        console.log("body:", req.body);
        const input: LoginInput=req.body;

        const ms = new MemberService();
        const result = await ms.processLogin(input);
        //TODO sessions authentications
        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        })
        
        
    }
    catch(err){
        console.log("Error, goHome", err);
        res.send(err);
    }
};
//call




export default restauranController;
