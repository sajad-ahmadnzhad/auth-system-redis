import {Request , Response , NextFunction} from 'express'
export default (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    const message = error.message || "Internal Server Error !!";
    const status = error.status || 500;
    res.status(status).json({ message });
  }
}
