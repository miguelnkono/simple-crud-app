import {
  getProducts,
  getSingleProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/product.controller.mjs";
import { Router } from "express";
const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
