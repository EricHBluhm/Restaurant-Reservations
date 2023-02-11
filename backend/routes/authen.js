import express from "express"
import { register,login,logout } from "../controllers/authen.js"

const router = express.Router()

//send user information, router.post(endpoint,function)
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router