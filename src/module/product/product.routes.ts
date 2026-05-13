import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router()
const controller = new ProductController

router.get("/", controller.getAllProducts)
// router.delete("/:id")
// router.post("/create")
// router.get(":id")

export default router