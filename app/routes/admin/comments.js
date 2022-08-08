const express = require('express');
const router = express.Router();
const commentsController = require('@controllers/admin/comments');

router.get('/', commentsController.index);

module.exports = router;
