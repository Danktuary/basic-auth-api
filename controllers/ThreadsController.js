const threads = [
	{ id: 1, name: 'Hi, I\'m new' },
	{ id: 2, name: 'Hi, I\'m new 2' },
	{ id: 3, name: 'Hi, I\'m new 3', private: true },
];

module.exports = {
	index(req, res) {
		return res.json(threads);
	},
	show(req, res) {
		return res.json(threads.find(thread => thread.id === parseInt(req.params.id)));
	},
};
