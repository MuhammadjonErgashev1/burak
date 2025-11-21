import  {Request , Response } from 'express';
import {T} from "../libs/types/common"
import MemberService from '../models/Member.service';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors, { HttpCode } from '../libs/errors';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';


 const memberService = new MemberService();
 const authService = new AuthService();
//REACT
const memberController: T = {};

//call
memberController.signup = async (req: Request, res: Response)=>{
    try
    {
        console.log('signup ')
        console.log("body:", req.body)
        
        const input: MemberInput = req.body,
           result:Member = await memberService.signup(input),
           token = await authService.createToken(result);
             console.log("result", token);
        
              res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER *3600*1000, 
            httpOnly: false,})

      res.status(HttpCode.CREATED).json({member: result, accessToken: token});
    }
    catch(err){
        console.log("Error, goHome", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({})
    }
};


memberController.login = async(req: Request, res: Response)=>{
    try
    {
        console.log('login');
        console.log("body:", req.body);
        const input: LoginInput=req.body,
           result = await memberService.login(input),
           token = await authService.createToken(result);
       
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER *3600*1000, 
            httpOnly: false,})

      res.status(HttpCode.OK).json({member: result, accessToken: token});
        
    }
    catch(err){
        console.log("Error, goHome", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({})
    }
};

export default memberController;
