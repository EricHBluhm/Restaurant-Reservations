import express from "express"
import { addReserve, checkRes } from "../controllers/reservations.js"

const router = express.Router()
router.post("/add",addReserve)
router.get("/checkRes",checkRes)

export default router