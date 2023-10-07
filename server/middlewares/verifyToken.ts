import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;
  if (!token)
    return res.status(401).json({ message: "You are not authenticated!" });

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) return res.status(403).json({ message: "Token is not valid!" });

    //@ts-ignore
    req.user = decoded;

    next();
  });
};
