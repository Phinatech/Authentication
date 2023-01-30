import { Response, Request, NextFunction } from "express";

//Next:- it catches the error
export const asynHandler = (fn:any) => {
    return (req:Request,res:Response,next:NextFunction)=>
    Promise.resolve(fn(req,res,next))
    .catch(next)
};
