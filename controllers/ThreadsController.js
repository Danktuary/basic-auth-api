const threads = [
	{ id: 1, name: 'Hi, I\'m new' },
	{ id: 2, name: 'Hi, I\'m new 2' },
	{ id: 3, name: 'Hi, I\'m new 3', private: true },
	{ id: 4, name: 'Hi, I\'m new 4', private: true },
];

module.exports = {
	index(req, res) {
		return res.json(threads);
	},
	show(req, res) {
		const thread = threads.find(t => t.id === parseInt(req.params.id))

		if (thread.private) {
			return res.status(401).json({ message: 'You don\'t have permission to view this thread' });
		}

		return res.json(thread);
	},
};
