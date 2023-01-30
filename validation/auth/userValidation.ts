import valiSchema from "./useer.schema";
import validator from "../validation";
import { NextFunction, RequestHandler,Request,Response} from "express"

//Validation middleware Functions

export const registerValidation :RequestHandler = (
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    validator(valiSchema.register, req.body, next);
};

export const loginValidation: RequestHandler = (
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    validator(valiSchema.login, req.body,next)
};