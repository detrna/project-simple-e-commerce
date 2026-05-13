import { Router } from "express";
import { UserController } from "./user.controller";
const controller = new UserController();

const router = Router();

router.get("/:id", controller.getUser);
router.get("/", controller.getAllUser);

export default router;
