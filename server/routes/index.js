import express from 'express';
import incidents from './incident';

const router = express.Router();

router.all('/', (req, res) => res.send('Welcome to iReporter'));

router.all('/api/v1', (req, res) => res.json({ message: 'welcome to iReporter API' }));

router.use('/api/v1', incidents);

export default router;
