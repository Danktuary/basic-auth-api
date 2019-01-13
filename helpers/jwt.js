const { jwtSecret } = require('../config.js');
const expressJwt = require('express-jwt');

module.exports = expressJwt({
	secret: jwtSecret,
	getToken(req) {
		const { headers, query, cookies } = req;
		const [bearer, token] = headers.authorization ? headers.authorization.split(' ') : [];
		
		if (bearer === 'Bearer') return token;
		if (query && query.token) return query.token;
		if (cookies && cookies.token) return cookies.token;

		return null;
	}
});
