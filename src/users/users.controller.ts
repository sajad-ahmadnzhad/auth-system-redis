import { NextFunction, Request, Response } from "express";
import redisDB from "../configs/db";
import bcrypt from "bcrypt";
import httpErrors from "http-errors";
export let myAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req as any;
    res.json(user);
  } catch (error) {
    next(error);
  }
};
export let deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req as any;
    const { password } = req.body;

    const foundUser = await redisDB.hgetall(user.email);
    const comparePassword = bcrypt.compareSync(password, foundUser.password);

    if (!comparePassword) {
      throw httpErrors.BadRequest("Password is not valid");
    }

    await redisDB.del(user.email);

    res.json({ message: "Deleted account successfully" });
  } catch (error) {
    next(error);
  }
};
