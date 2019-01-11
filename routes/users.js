const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController.js');

router.get('/', UsersController.index);

module.exports = router;
