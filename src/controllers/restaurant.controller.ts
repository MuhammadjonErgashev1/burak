import  {NextFunction, Request , Response } from 'express';
import {T} from "../libs/types/common"
import MemberService from '../models/Member.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import Errors, { HttpCode, Message } from '../libs/errors';

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
        res.redirect("/admin")
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
        res.redirect("/admin")
    }
};
restauranController.getSignup = (req: Request, res: Response)=>{
    try
    {
       res.render("signup");
    }
    catch(err){
        console.log("Error, goHome", err);
        res.redirect("/admin")
    }
};

restauranController.processSignup = async (req: AdminRequest, res: Response)=>{
    try
    {
        console.log('processSignup ')
        
        const file = req.file;
        console.log("file",file);
       if(!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
        
        //console.log("body:", req.body)
        
        const input: MemberInput = req.body;
        input.memberType = MemberType.RESTAURANT;
        input.memberImage = file?.path;

        const memberService = new MemberService()
        const result= await memberService.processSignup(input);
        //TODO sessions authentications

        req.session.member = result;
        req.session.save(function(){
            res.redirect("/admin/product/all");
        })


        
        
    }
    catch(err){
        console.log("Error, goHome", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(`<script> alert("${message}"); window.location.replace('admin/signup') </script>`);
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
            res.redirect("/admin/product/all");
        })
        
        
    }
    catch(err){
        console.log("Error, goHome", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);
        res.send(err);
    }
};
restauranController.logout = async(req: AdminRequest, res: Response)=>{
    try
    {
        console.log('logout');
       req.session.destroy(function(){
        res.redirect("/admin")
       })
        
        
    }
    catch(err){
        console.log("Error, logout", err);
        res.redirect("/admin")
    }
};
//call

restauranController.checkAuthsession = async(req: AdminRequest, res: Response)=>{
    try
    {
        console.log('checkAuthsession');
        

        const ms = new MemberService();
        
     if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
     else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`)
        
        
        
    }
    catch(err){
        console.log("Error, goHome", err);
        res.send(err);
    }
};

restauranController.verifyRestaurant = (
    req: AdminRequest, 
    res: Response,
    next: NextFunction
)=>{
     if(req.session?.member?.memberType === MemberType.RESTAURANT){
        req.member = req.session.member;
        next();
       }
    
    else {
        const message = Message.NOT_AUTHENTICATED
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`
         );
    }

}


export default restauranController;
