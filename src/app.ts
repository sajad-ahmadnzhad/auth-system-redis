import express from "express";
import "./configs/db";
import errorMiddlewares from "./middlewares/error.middleware";
import notFoundMiddlewares from "./middlewares/notFound.middleware";
import mainRoutes from './app.routes'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(mainRoutes)
app.use(notFoundMiddlewares);
app.use(errorMiddlewares);
app.listen(PORT, () => {
  console.log(`app running app ${PORT}`);
});
