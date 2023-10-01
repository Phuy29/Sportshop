import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createAccessToken = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
    process.env.ACCESS_TOKEN as string,
    { expiresIn: "20s" }
  );
};
