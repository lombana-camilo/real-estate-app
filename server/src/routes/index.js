import { Router } from "express";
import properties from "./properties.js";
import users from "./users.js";
const router = Router();

router.use("/properties", properties);
router.use("/users", users);

export default router;
