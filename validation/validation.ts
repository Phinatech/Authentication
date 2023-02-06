import Joi from "joi";
import {AppError,HttpCode} from "../utils/appError"
import {NextFunction} from "express"

//Central validation Function
const validator = async (
    schemaName: Joi.ObjectSchema, //It expecting a object Schema for it and setting an interface or it.
    body:object,
    next:NextFunction
    ): Promise<void> => {
        const value = await schemaName.validate(body,{
            //These below help you to caputure some errors
            abortEarly:false,// it prints or caputure all the error
            allowUnknown:true,
            stripUnknown:true,
        });

        try {
            value.error?
            next(
                new AppError({
                    httpCode:HttpCode.BAD_REQUEST,
                    message:value.error.details[0].message,
                })
            )
            : next()
        } catch (error) {
            console.log(error)
        }
    };

    export default validator
 
