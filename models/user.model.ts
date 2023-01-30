import mongoose,{Document,Schema,model} from "mongoose";
import { IData } from "../interfaces/user.interface";
import isEmail from "validator/lib/isEmail"


interface IUser extends IData,Document{}

const userSchema = new Schema<IData>({
    name:{
        type:String,
        required:[true,"Please enter your Fullname"]
    },

    email:{
        type:String,
        required:[true,"Please Your email "],
        unique:true,
        trim:true,
        lowercase:true,
        validate:[isEmail, "please enter a valid email"],
    },

    password:{
        type:String,
        required:[true,"Please enter your password"],
    },
},{
    timestamps:true,
    versionKey:false,
});

const userModel  = model<IUser>("Users", userSchema)
export default userModel






// import mongoose,{Schema, model, Document} from "mongoose";

// interface userData{
//     email:string
//     password:string
//     fullname:string
//     stack:string
// }

// interface usersAuth extends userData,Document{}

// const userSchema = new Schema({
//     email:{
//         type:String,
//         required:[true,"please enter an email"],
//         lowercase: true,
//         unique:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         required:[true,"please enter a password"],
//         min:[6, "please enter at least 6 character"]
//     },
//     fullname:{
//         type:String,
//         required:[true, "please enter your name"],
//     },
//     stack:{
//         type:String,
//     }
// },{
//     timestamps:true
// })

// const userModel = model<usersAuth>("users",userSchema)
// export default userModel