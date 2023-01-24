import mongoose,{Document,Schema,model} from "mongoose";

interface userData {
    fullname :string;
    email:string;
    password:string;
    stack:string;
    isAdmin:string
}

interface Users extends userData,Document{}

const userSchema = new Schema({
    fullname:{
        type:String,
        required:[true,"Please enter your Fullname"]
    },

    email:{
        type:String,
        required:[true,"Please Your email "],
        unique:true,
        trim:true,
        lowercase:true
    },

    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:6
    },

    stack:{
        type:String,

    },
    isAdmin:{
        type:Boolean,
        default:false

    }
})

const userModel  = model<Users>("Users", userSchema)
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