import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  res.status(404).json({ message: "Page not found" });
};
