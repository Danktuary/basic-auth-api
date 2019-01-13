const users = require('../users/index.js');
const { jwtSecret } = require('../config.js');
const auth = require('../util/auth.js');

module.exports = {
	store({ body }, res) {
		try {
			const user = auth.login(body.username, body.password);
			return res.json({ ...user });
		}
		catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}
};
