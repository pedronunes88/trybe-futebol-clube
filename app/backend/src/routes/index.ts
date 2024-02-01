import { Router } from 'express';
import routerInstance from './teamRoute';
import loginRouter from './loginRoute';

const router = Router();

router.use('/teams', routerInstance);
router.use('/login', loginRouter);

export default router;
