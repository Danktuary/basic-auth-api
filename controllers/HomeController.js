const { jwtSecret } = require('../config.js');
const users = require('../users/index.js');

module.exports = {
	index() {
		return users.map(user => {
			delete user.password;
			return user;
		});
	},
};
