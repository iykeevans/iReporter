const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4040;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to my API' }));

app.listen(port, () => console.log(`Now listening on ${port}`));
