const express = require('express');
const router = express.Router();

// routes

const dashboardRouter = require('./dashboard');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');

router.use('/dashboard', dashboardRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);

module.exports = router;
