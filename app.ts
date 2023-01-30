import express,{Application, NextFunction,Request,Response} from "express"
import cors from "cors";
import userRouter from "./router/user.route";
import productRouter from "./router/product.router"
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorhandle";
import { AppError, HttpCode } from "./utils/appError";

 const appConfig = (app:Application)=>{
    //Middle wares configuartion
    app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))
    //routes
    .use("/api/auth", userRouter)
    .use("/api/product",productRouter)

    app.all("*",(req:Request,res:Response,next:NextFunction)=>{
        next(new AppError({
            message:`This route ${req.originalUrl} does not exit`,
            httpCode:HttpCode.BAD_REQUEST,
            isOperational:true
        }))
    })

    // errror handler : note this should be the last in your app.This is a  middle ware that shoots any error you have created.
    .use(errorHandler)
}

export default appConfig
//Calling your middle wares and your routes.it also a configuration that takes in app