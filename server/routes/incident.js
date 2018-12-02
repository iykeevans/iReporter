import express from 'express';
import incident from '../controllers/incident';

const router = express.Router();

router.get('/red-flags', incident.getFlags);

export default router;
