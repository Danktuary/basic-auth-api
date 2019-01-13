const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index.js');
const errorHandler = require('./helpers/error-handler.js');

const app = express();

app.use(cors());
app.use(errorHandler);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4242, () => {
	console.log('Listening at http://localhost:4242');
});

app.use('/', routes.home);
app.use('/login', routes.login);
app.use('/threads', routes.threads);
