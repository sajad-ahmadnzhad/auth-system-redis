import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import redisDB from "../configs/db";
import httpErrors from "http-errors";
import bcrypt from "bcrypt";
export let register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const existingUser = await redisDB.exists(email);

    if (existingUser)
      throw httpErrors.Conflict("User with this email already exists");

    const hashPassword = bcrypt.hashSync(password, 10);
    const saveUser = await redisDB.hmset(email, {
      ...req.body,
      password: hashPassword,
    });

    if (saveUser !== "OK") throw saveUser;

    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "10d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    res.json({ message: "Registered was successful" });
  } catch (error) {
    next(error);
  }
};
export let logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log((req as any).user);
    res.clearCookie("token");
    res.json({ message: "logout successfully" });
  } catch (error) {
    next(error);
  }
};
