const express = require('express');
const router = express.Router();

const flowerController = require('../app/controllers/FlowerController');

//newsController.index
router.get('/create', flowerController.create)
router.post('/store', flowerController.store)
router.get('/:slug', flowerController.show)

module.exports = router;
