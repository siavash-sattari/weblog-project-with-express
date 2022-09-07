const express = require('express');
const router = express.Router();
const postsController = require('@controllers/front/post');
const commentsController = require('@controllers/front/comment');

router.get('/p/:post_slug', postsController.showPost);
router.post('/p/:post_slug/comments', commentsController.store);

module.exports = router;
