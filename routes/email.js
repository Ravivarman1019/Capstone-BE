
const express = require('express');
const { moveToTrash } = require('../controllers/emailController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.patch('/emails/:id/trash', authMiddleware, moveToTrash);

module.exports = router;
