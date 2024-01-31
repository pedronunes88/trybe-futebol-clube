import { Router } from 'express';
import routerInstance from './teamRoute';

const router = Router();

router.use('/teams', routerInstance);

export default router;
