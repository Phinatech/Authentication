import express,{Application} from "express"
import cors from "cors";
import router from "./router/user.route";
import morgan from "morgan";

 const appConfig = (app:Application)=>{
    //Middle wares
    app.use(express.json()).use(cors()).use(morgan("dev"));

    //routes
    app.use("/api/auth", router)
}

export default appConfig
//Calling your middle wares and your routes.it also a configuration that takes in app