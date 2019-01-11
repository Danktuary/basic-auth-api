const { jwtSecret } = require('../config.js');
const expressJwt = require('express-jwt');

module.exports = expressJwt({
		secret: jwtSecret,
		// credentialsRequired: false,
	}).unless({
		path: [
			'/login',
		],
	});
