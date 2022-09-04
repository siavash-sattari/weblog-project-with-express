const express = require('express');
const router = express.Router();

// routes

const dashboardRouter = require('./dashboard');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');
const usersRouter = require('./users');

router.use('/dashboard', dashboardRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.use('/users', usersRouter);

module.exports = router;
