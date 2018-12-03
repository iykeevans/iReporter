import express from 'express';
import incident from '../controllers/incident';

const router = express.Router();

router.get('/red-flags', incident.getFlags);

router.patch('/red-flags/:id/comment', incident.updateComment);

export default router;
