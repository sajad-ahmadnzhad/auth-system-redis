import express, { NextFunction, Request, Response } from "express";
import './configs/db'
const app = express();


app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    const message = error.message || "Internal Server Error !!";
    const status = error.status || 500;
    res.status(status).json({ message });
  }
});

app.listen(4000, () => {
  console.log(`app running app ${4000}`);
});
