import express from 'express';
import incidents from './incident';

const router = express.Router();

router.get('/api/v1', (req, res) => res.json({ message: 'welcome to me API' }));

router.use('/api/v1', incidents);

export default router;
