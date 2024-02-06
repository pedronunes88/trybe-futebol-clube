import { Router } from 'express';
import routerInstance from './teamRoute';
import loginRouter from './loginRoute';
import matchesRouter from './matchesRoute';
import leaderboardRouter from './leaderboardRoute';

const router = Router();

router.use('/teams', routerInstance);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
