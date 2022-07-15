const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/admin/dashboard');

router.get('/dashboard', dashboardController.index);

module.exports = router;
