const express = require('express');
const router = express.Router();

// routes

const dashboardRouter = require('./dashboard');
const postsRouter = require('./posts');

router.use('/dashboard', dashboardRouter);
router.use('/posts', postsRouter);

module.exports = router;
