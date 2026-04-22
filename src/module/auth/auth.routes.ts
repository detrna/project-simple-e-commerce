import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();
const controller = new authController();

router.post("/register", controller.register);

export default router;
