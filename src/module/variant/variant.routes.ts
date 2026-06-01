import { Router } from "express";
import { VariantController } from "./variant.controller";
import { authenticate } from "../../middleware/authenticate";

const router = Router();
const controller = new VariantController();

router.delete("/:id", authenticate, controller.delete);

export default router;
