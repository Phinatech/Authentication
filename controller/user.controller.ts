import {Request,Response} from "express"
import userModel from "../models/user.model";

//sign up a user
export const register =async (req:Request, res:Response):Promise<Response> => {
    try {
        const {email,password,fullname,stack} = req.body
        const RegisterUser = await userModel.create({
            email,password,fullname,stack
        })
        return res.status(201).json({
            status:"Successfully created",
            data:RegisterUser
        })
    } catch (error) {
        return res.status(401).json({
            status:"Failed to register",
            data:error
        })
    }

}

//sign In or login
export const login =async (req:Request,res:Response):Promise<Response> => {
    try {
        const {email} = req.body
        if (!email) {
            return res.status(404).json({message:"Please enter an email"})
        }
        const userLogin = await userModel.findOne({
            email
        })
        if (!userLogin) {
            return res.status(404).json({message:"User not found, please register"})
        }
        return res.status(200).json({
            status:"User login in Successfully",
            data:userLogin
        })
    } catch (error) {
        return res.status(401).json({
          status: "Failed to register",
          data: error,
        });
    }
}

//Get all user
export const getUser =async (req:Request,res:Response):Promise<Response> => {
    try {
        const users = await userModel.find()
        return res.status(200).json({
            status:`${users.length}user(s)`,
            data:users
        })
    } catch (error) {
         return res.status(401).json({
            status:"Failed to register",
            data:error
        })
    }
}