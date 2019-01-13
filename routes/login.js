const router = require('express').Router();

const LoginController = require('../controllers/LoginController.js');

router.post('/', LoginController.store);

module.exports = router;
