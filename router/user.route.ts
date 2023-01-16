import {Router} from "express";
import { register, getUser, login } from "../controller/user.controller";

const router = Router()

router.route("/register").post(register);
router.route("/").get(getUser);
router.route("/login").post(login);

export default router
