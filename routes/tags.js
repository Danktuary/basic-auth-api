const express = require('express');
const router = express.Router();

const TagsController = require('../controllers/TagsController.js');

router.get('/', TagsController.index);

module.exports = router;
