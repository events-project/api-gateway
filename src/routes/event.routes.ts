import { createEvent } from '@controllers/events';
import { Router } from 'express';

const router = Router();

router.post('/', createEvent);

export default router;
