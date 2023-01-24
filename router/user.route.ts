import {Router} from "express"
import { gettingUser, login, Register } from "../controller/user.controller"

const router = Router()

router.route("/register").post(Register)
router.route("/login").post(login)
router.route("/getuser").get(gettingUser)

export default router







// import {Router} from "express";
// import { register, getUser, login } from "../controller/user.controller";

// const router = Router()

// router.route("/register").post(register);
// router.route("/").get(getUser);
// router.route("/login").post(login);

// export default router
