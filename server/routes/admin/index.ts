import { Router } from "express";
import { productRoutes } from "./product";

const router = Router();

router.use("/product", productRoutes);

export const adminRoutes = router;
