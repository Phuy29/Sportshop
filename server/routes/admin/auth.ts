import { Router } from "express";
import prisma from "../../libs/prisma";
import bcrypt from "bcrypt";
import { signInSchema } from "../../validations/auth";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

const router = Router();

router.post("/sign-in", async (req, res) => {
  const body = signInSchema.parse(req.body);

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (!user) return res.status(404).json({ message: "Email doesn't exist!" });

  const validPassword = await bcrypt.compare(body.password, user.password);

  if (!validPassword)
    return res.status(401).json({ message: "Wrong password!" });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "Login successfully!", token });
});

export const authRoutes = router;
