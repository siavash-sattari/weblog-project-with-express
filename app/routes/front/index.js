const express = require('express');
const router = express.Router();

// routers
const homeRouter = require('./home');
const postsRouter = require('./post');

router.use('/', homeRouter);
router.use('/', postsRouter);

module.exports = router;
