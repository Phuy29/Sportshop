import { Router, Request, Response } from "express";
import { createProductSchema } from "../../validations/product";
import prisma from "../../libs/prisma";

const router = Router();

router.get("/", async (req, res) => {
  const product = await prisma.product.findMany();
  res.status(200).json(product);
});

router.post("/", async (req, res) => {
  const body = createProductSchema.parse(req.body);

  const product = await prisma.product.create({
    data: body,
  });

  res.status(200).json(product);
});

export const productRoutes = router;
