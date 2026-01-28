import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register); // Optional, maybe protect this too later or remove

export default router;
