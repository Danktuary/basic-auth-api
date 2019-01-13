const router = require('express').Router();

const jwt = require('../helpers/jwt.js');
const ThreadsController = require('../controllers/ThreadsController.js');

router.get('/', ThreadsController.index);
router.get('/:id', jwt, ThreadsController.show);

module.exports = router;
