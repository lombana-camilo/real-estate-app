import { Router } from "express";
import properties from "./properties.js"
const router = Router()

router.use("/properties",properties)

export default router
