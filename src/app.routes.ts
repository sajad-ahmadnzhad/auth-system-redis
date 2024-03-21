import express from 'express';
import authRoutes from './auth/auth.route'
import usersRoutes from './users/user.routes'

const router = express.Router()

router.use("/api/auth", authRoutes);
router.use("/api/users", usersRoutes);

export default router