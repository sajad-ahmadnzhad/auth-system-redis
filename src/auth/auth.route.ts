import express from 'express'
import { register ,logout, login} from './auth.controller'
import authMiddlewares from '../middlewares/auth'
const router = express.Router()

router.post('/register' , register)
router.post('/logout' , authMiddlewares, logout)
router.post('/login' , login)
export default router