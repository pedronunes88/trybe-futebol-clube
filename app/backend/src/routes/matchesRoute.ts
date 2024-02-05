import { Response, Request, Router } from 'express';
import MatchesController from '../controller/matchesController';

const matchesRouter = Router();

const matchController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchController.allMatches(req, res));

matchesRouter.put('/:id', (req: Request, res: Response) => matchController.updateMatch(req, res));

matchesRouter.patch('/:id', (req: Request, res: Response) => matchController.endMatch(req, res));

export default matchesRouter;
