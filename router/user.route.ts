import {Router} from "express"
import { gettingUser, login, Register } from "../controller/user.controller";
import { loginValidation, registerValidation } from "../validation/auth/userValidation"

const router = Router()

router.route("/getuser").get(gettingUser);
router.route("/register").post(registerValidation,Register)
router.route("/login").post(loginValidation,login)


export default router;







// import {Router} from "express";
// import { register, getUser, login } from "../controller/user.controller";

// const router = Router()

// router.route("/register").post(register);
// router.route("/").get(getUser);
// router.route("/login").post(login);

// export default router
