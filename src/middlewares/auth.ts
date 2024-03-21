import { NextFunction, Request, Response } from "express";
import httpErrors from "http-errors";
import redisDB from "../configs/db";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw httpErrors.Forbidden(
        "This path is protected. To access it, you must log in first"
      );
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET as string);

    const existingUser = await redisDB.exists((verifyToken as any).email);

    if (!existingUser) {
      throw httpErrors.NotFound("User not found");
    }
    const { password, ...user } = await redisDB.hgetall(
      (verifyToken as any).email
    );

    (req as any).user = user;

    next();
  } catch (error) {
    next(error);
  }
};
