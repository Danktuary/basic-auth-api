const router = require('express').Router();

router.get('/', (req, res) => {
	return res.send({ message: 'hi' });
});

module.exports = router;
