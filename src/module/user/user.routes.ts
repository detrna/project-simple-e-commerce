import { Router } from "express";
import { userController } from "./user.controller";
const controller = new userController();

const router = Router();

router.get("/:id", controller.getUser);
router.get("/", controller.getAllUser);

export default router;
