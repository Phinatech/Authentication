// import userModel from "../model/user.model";
// import { Request, Response } from "express";
// import bcrypt from "bcrypt";

// export const regUser = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { fullName, email, password, stack, isAdmin } = req.body;

//     const salt: string = await bcrypt.genSalt(10);
//     const hashedpassword = await bcrypt.hash(password, salt);

//     const user = await userModel.create({
//       fullName,
//       email,
//       password: hashedpassword,
//       stack,
//       isAdmin,
//     });

//     if (!user) {
//       return res.status(401).json({
//         message: "please submit all details",
//       });
//     }
//     return res.status(201).json({
//       message: "registration successful",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: `an error occured creating account`,
//       error: error,
//     });
//   }
// };

// export const logIn = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { email, password } = req.body;

//     if (!email) {
//       return res.status(401).json({ message: "enter an email" });
//     }

//     const user = await userModel.findOne({ email });

//     const checkPassword = await bcrypt.compare(password, user!.password);

//     if (!user || !checkPassword) {
//       return res.status(401).json({ message: `email or password incorrect` });
//     }
//     return res.status(200).json({ message: `login successful`, data: user });
//   } catch (error) {
//     return res.status(401).json({
//       message: `an error occured getting you in to your account`,
//       error: error,
//     });
//   }
// };

// export const getUsers = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const users = await userModel.find();

//     return res.status(200).json({
//       message: `${users.length} users found`,
//       data: users,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: `an error occured getting all users`,
//       error: error,
//     });
//   }
// };

import express from "express"