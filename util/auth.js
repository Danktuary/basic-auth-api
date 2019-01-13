const jwt = require('jsonwebtoken');

const users = require('../users/index.js');
const { jwtSecret } = require('../config.js');

module.exports = {
	login(username, password) {
		if (!username || !password) throw new Error('Username and password are required');

		const user = users.find(u => {
			return u.username.toLowerCase() === username.toLowerCase() && u.password === password;
		});

		if (!user) throw new Error('No user');

		const { password: pw, ...cleanUser } = user;
		const token = jwt.sign({ cleanUser }, jwtSecret, { expiresIn: '72h' });

		return { user: { token, ...cleanUser } };
	}
};
