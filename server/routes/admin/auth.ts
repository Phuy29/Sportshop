import { Router } from "express";
import prisma from "../../libs/prisma";
import bcrypt from "bcrypt";
import { signInSchema, signUpSchema } from "../../validations/auth";
import { Role } from "@prisma/client";

const router = Router();

router.post("/sign-up", async (req, res) => {
  const body = signUpSchema.parse(req.body);

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(body.password, salt);

  const user = await prisma.user.create({
    data: { ...body, role: Role.STAFF, password: hashPassword },
  });

  res.status(200).json(user);
});

router.post("/sign-in", async (req, res) => {
  const body = signInSchema.parse(req.body);

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) return res.status(404).json("Email doesn't exist!");

  const validPassword = await bcrypt.compare(body.password, user.password);

  if (!validPassword) return res.status(401).json("Wrong password!");

  res.status(200).json(user);
});

export const productRoutes = router;
