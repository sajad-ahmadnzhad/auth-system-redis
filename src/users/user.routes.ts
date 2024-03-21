import express from "express";
import { myAccount , deleteAccount } from "./users.controller";
import authMiddleware from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/my-account", authMiddleware, myAccount);
router.delete('/delete-account' , authMiddleware , deleteAccount)
export default router;
