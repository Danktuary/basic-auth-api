const users = require('../users/index.js');

module.exports = {
	index(req, res) {
		return res.json(
			users.map(user => {
				delete user.password;
				return user;
			})
		);
	},
};
