import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const port = process.env.PORT || 4040;

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`Now listening on ${port}`));

export default app;
