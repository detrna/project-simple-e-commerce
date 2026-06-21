import { Router } from "express";
import { categoryController } from "./category.container";
import { getCache } from "../../middleware/getCache";

const router = Router();

router.get(
  "",
  getCache({ entityName: "category", paramsKey: "" }),
  categoryController.getAll,
);
router.get("/:id", categoryController.getAll);

export default router;
