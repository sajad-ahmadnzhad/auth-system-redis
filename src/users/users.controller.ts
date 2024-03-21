import { NextFunction, Request, Response } from "express";

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
