module.exports = {
	create(req, res) {
		return res.json({ message: 'Hi' });
	},
	store(req, res) {
		return res.json({ message: 'Hi, stored' });
	}
};
