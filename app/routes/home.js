const express = require('express');
const router = express.Router();
const homeController = require('@controllers/front/home');

router.get('/', homeController.index);

module.exports = router;
