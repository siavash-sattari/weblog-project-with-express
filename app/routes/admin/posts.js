const express = require('express');
const router = express.Router();
const postsController = require('@controllers/admin/posts');

router.get('/', postsController.index);
router.get('/create', postsController.create);
router.post('/store', postsController.store);
router.get('/delete/:postID', postsController.remove);
router.get('/edit/:postID', postsController.edit);
router.post('/update/:postID', postsController.update);

module.exports = router;
