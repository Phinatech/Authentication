import express, { Application } from "express";
import cors from "cors";
const port = 4000
import DBconnect from "./Config/db";
import router from "./router/user.route"
//intializing our DB CONNECTION
DBconnect()

//instantiating the aplication
const app:Application = express()
//instantiating our middlewares
app.use(express.json())
app.use(cors())

//instantiating our routes
app.use("/api/auth",router)

app.listen(port,()=>{
    console.log(`Server is listening: ${port}`)
})