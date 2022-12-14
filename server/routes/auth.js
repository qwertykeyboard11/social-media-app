import express from 'express';
import { login, register, logout } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.get('/login', login);
router.get('/logout', logout);

export default router;