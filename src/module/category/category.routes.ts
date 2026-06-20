import { Router } from "express";
import { categoryController } from "./category.container";

const router = Router();

router.get("", categoryController.getAll);
router.get("/:id", categoryController.getAll);

export default router;
