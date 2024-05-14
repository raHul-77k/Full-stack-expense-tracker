// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/user');

router.post('/sign-up', adminControllers.postUserDetails);

module.exports = router;
