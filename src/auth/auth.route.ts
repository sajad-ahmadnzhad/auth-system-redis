import express from 'express'
import { register } from './auth.controller'
import authMiddlewares from '../middlewares/auth'
const router = express.Router()

router.post('/register' , register)

export default router