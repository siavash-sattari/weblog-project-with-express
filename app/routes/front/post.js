const express = require('express');
const router = express.Router();
const postsController = require('@controllers/front/post');

router.get('/p/:post_slug', postsController.showPost);

module.exports = router;
