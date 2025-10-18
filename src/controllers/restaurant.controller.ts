import  {Request , Response } from 'express';
import {T} from "../libs/types/common"
import MemberService from '../models/member.service';
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restauranController: T = {};
restauranController.goHome = (req: Request, res: Response)=>{
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
restauranController.getLogin = (req: Request, res: Response)=>{
    try
    {
        console.log('getLogin');
        res.send("login page");
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
restauranController.getSignup = (req: Request, res: Response)=>{
    try
    {
        res.send("Signup page")
    }
    catch(err){
        console.log("Error, goHome", err);
    }
};
console.log("processLogin ishladi");
restauranController.processLogin = async(req: Request, res: Response)=>{
    try
    {
        console.log('processLogin');
        console.log("body:", req.body);
        const input: LoginInput=req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        res.send(result)
        
    }
    catch(err){
        console.log("Error, goHome", err);
        res.send(err);
    }
};
restauranController.processSignup = async (req: Request, res: Response)=>{
    try
    {
        console.log('processSignup ')
        console.log("body:", req.body)
        
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService()
        await memberService.processSignup(newMember);
        res.send("done")
        
    }
    catch(err){
        console.log("Error, goHome", err);
        res.send(err);
    }
};

export default restauranController;
