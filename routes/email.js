import express from 'express';
import { sendEmail, getEmails } from '../controllers/emailController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/send', authMiddleware, sendEmail);
router.get('/', authMiddleware, getEmails);

export default router;
