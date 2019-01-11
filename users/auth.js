const jwt = require('jsonwebtoken');

const users = require('../users/index.js');
const { jwtSecret } = require('../config.js');

module.exports = async ({ username, password }) => {
	const user = users.find(user => {
		return user.username === username && user.password === password;
	});

	if (!user) return { error: 'no user' };

	delete user.password;
	const token = jwt.sign({ sub: user.id }, jwtSecret);

	return { token, ...user };
};
