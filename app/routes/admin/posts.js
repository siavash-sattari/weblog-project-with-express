const express = require('express');
const router = express.Router();
const postsController = require('@controllers/admin/posts');

router.get('/', postsController.index);
router.get('/create', postsController.create);
router.post('/store', postsController.store);

module.exports = router;
