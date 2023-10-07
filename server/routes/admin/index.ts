import { Router } from "express";
import { productRoutes } from "./product";
import { authRoutes } from "./auth";

const router = Router();

router.use("/product", productRoutes);
router.use("/auth", authRoutes);

export const adminRoutes = router;
