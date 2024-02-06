import { Router, Request, Response } from 'express';
import LeaderBoardController from '../controller/scoreboardController';

const leaderboardRouter = Router();
const leaderboardController = new LeaderBoardController();

leaderboardRouter.get(
  '/home',
  (req: Request, res: Response) => leaderboardController.getLeaderBoard(req, res),
);

export default leaderboardRouter;
