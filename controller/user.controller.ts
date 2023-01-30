import userModel from "../models/user.model";
import {NextFunction, Request,Response} from "express"
import bcrypt from "bcrypt"
import { asynHandler } from "../utils/asyncHandler";
import { IData } from "../interfaces/user.interface";
import { AppError, HttpCode } from "../utils/appError";




//bcrypt: it helps to encrypt your values encode it and  return the encrypted value when requested
//Creating  a User
export const Register = asynHandler(
    async (
    req:Request<{},{},IData>,
    res:Response,
    next:NextFunction
    ):Promise<Response> => {
      const {name,email,password} = req.body;

      const salt:string = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password,salt)
      const regUser = await userModel.create({
            email,password: hashedpassword,name})
        if (!regUser) {
            next(
                new AppError({
                    message:"Account not created",
                    httpCode:HttpCode.BAD_REQUEST,
                })
            )
        }
        return res.status(200).json({
            status:"Success",
            data:regUser
        });
});

//Login in or Signin
export const login = asynHandler(
    async (
      req:Request,
      res:Response,
      next:NextFunction
      ):Promise<Response> => {
       const {email,password}= req.body;

        const user = await userModel.findOne({ email });
    //    if(!email){
    //    next(
    //      new AppError({
    //        message: "User not found",
    //        httpCode: HttpCode.UNAUTHORIZED,
    //        isOperational: true,
    //      })
    //    );
    //    }
       if(!user){
       next(
         new AppError({
           message: "User not found",
           httpCode: HttpCode.UNAUTHORIZED,
         
         })
       );
       }
       const Checkpassword = await bcrypt.compare(password, user!.password)
        if(!Checkpassword){
        next(
            new AppError({
                message:"Email or password not  correct",
                httpCode:HttpCode.UNAUTHORIZED,
                isOperational:true,
            })
         )
        }
       return res.status(200).json({
        status:`Welcome ${user!.name}` })
});


//Getting all users 
export const gettingUser = async (
  req:Request, 
  res:Response
  ):Promise<Response>=> {
  try {
    const User = await userModel.find();
    return res.status(200).json({
        status:`Gotten ${User.length} users successfully`,
        data:User
    })
  } catch (error) {
    return res.status(400).json({
      status: "error occured",
      data: error
    });
  }
};











// import {Request,Response} from "express"
// import userModel from "../models/user.model";

// //sign up a user
// export const register =async (req:Request, res:Response):Promise<Response> => {
//     try {
//         const {email,password,fullname,stack} = req.body
//         const RegisterUser = await userModel.create({
//             email,password,fullname,stack
//         })
//         return res.status(201).json({
//             status:"Successfully created",
//             data:RegisterUser
//         })
//     } catch (error) {
//         return res.status(401).json({
//             status:"Failed to register",
//             data:error
//         })
//     }

// }

// //sign In or login
// export const login =async (req:Request,res:Response):Promise<Response> => {
//     try {
//         const {email} = req.body
//         if (!email) {
//             return res.status(404).json({message:"Please enter an email"})
//         }
//         const userLogin = await userModel.findOne({
//             email
//         })
//         if (!userLogin) {
//             return res.status(404).json({message:"User not found, please register"})
//         }
//         return res.status(200).json({
//             status:"User login in Successfully",
//             data:userLogin
//         })
//     } catch (error) {
//         return res.status(401).json({
//           status: "Failed to register",
//           data: error,
//         });
//     }
// }

// //Get all user
// export const getUser =async (req:Request,res:Response):Promise<Response> => {
//     try {
//         const users = await userModel.find()
//         return res.status(200).json({
//             status:`${users.length}user(s)`,
//             data:users
//         })
//     } catch (error) {
//          return res.status(401).json({
//             status:"Failed to register",
//             data:error
//         })
//     }
// }