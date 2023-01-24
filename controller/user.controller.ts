import userModel from "../models/user.model";
import {Request,Response} from "express"
import bcrypt from "bcrypt"


//bcrypt: it helps to encrypt your values encode it and  return the encrypted value when requested6


//Creating  a User
export const Register = async (req:Request,res:Response):Promise<Response> => {
    try {
        const {fullname,email,password,stack,isAdmin} = req.body;

        const salt:string = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        const regUser = await userModel.create({
            email,password: hashedpassword,fullname,stack,isAdmin
        })
        if (!regUser) {
            return res.status(401).json({
                status:"please submit all details"
            })
        }
        return res.status(201).json({
            status:"Success",
            data:regUser
        });
    } catch (error) {
        return res.status(400).json({
            status:"error occured",
            data:error
        })
    }
}

//Login in or Signin
export const login =async (req:Request,res:Response):Promise<Response> => {
    try {
       const {email,password}= req.body;

       if(!email){
        return res.status(401).json({
            status:"Please enter your email"
        })
       }
       const User = await userModel.findOne({email});

       const Checkpassword = await bcrypt.compare(password, User!.password)
       if(User || !Checkpassword){
        return res.status(200).json({
            status:"email or password incoorect"
        });
       }
       return res.status(200).json({
        status:`Welcome ${User!.fullname}`,
        data:User
       })

    } catch (error) {
        return res.status(400).json({
          status: "error occured",
          data: error,
        }); 
    }
}


//
export const gettingUser = async (req:Request, res:Response):Promise<Response>=> {
  try {
    const User = await userModel.find();
    return res.status(200).json({
        status:`Gotten ${User.length} users successfully`,
        data:User
    })
  } catch (error) {
    return res.status(400).json({
      status: "error occured",
      data: error,
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