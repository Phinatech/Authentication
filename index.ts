import express,{Application} from "express"
import appConfig from "./app"
import  DbConnection  from "./Config/db"

const app: Application = express();
const port :number = 2033

//catching errors that escaped.its coming from nodes it might be coming from user and you didnt perpare for.It only triggers when you input in coming from users
process.on("uncaughtException",(err:Error)=>{
    console.log(`uncaughtExpection server shutting down`)
    console.log(err.name, err.message)
    process.exit(1)
})

DbConnection()
appConfig(app)

const server = app.listen (port,()=>{
    console.log(`Server is listening: ${port}`)
});

//unhandle rejection is an error that you are ready for ie error you  are expecting.and baiscally it acts like a developer error.This is coming from the developer itself.

process.on("unhandledRejection",(reason:any)=>{
    console.log(`unhandleRejection server shutting down`)
    console.log(reason.name, reason)
    server.close(()=>{
        process.exit(1)
    })
})






















// import express, { Application } from "express";
// import cors from "cors";
// const port = 4000
// import DBconnect from "./Config/db";
// import router from "./router/user.route"
// //intializing our DB CONNECTION
// DBconnect()

// //instantiating the aplication
// const app:Application = express()

// //instantiating our middlewares
// app.use(express.json())
// app.use(cors())

// //instantiating our routes
// app.use("/api/auth",router)

// app.listen(port,()=>{
//     console.log(`Server is listening: ${port}`)
// })