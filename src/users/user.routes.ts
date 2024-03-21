import express from "express";
import { myAccount } from "./users.controller";
import authMiddleware from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/my-account", authMiddleware, myAccount);

export default router;
