const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/index.js');
const jwt = require('./helpers/jwt.js');

app.use(jwt);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true /* false */ }));

app.listen(4242, () => {
	console.log('Listening at http://localhost:4242.');
});

app.use('/', routes.home);
app.use('/users', routes.users);
app.use('/login', routes.login);
