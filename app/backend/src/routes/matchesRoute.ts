import { Response, Request, Router } from 'express';
import MatchesController from '../controller/matchesController';
import Autenticador from '../middlewares/autenticadorToken';

const matchesRouter = Router();

const matchController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchController.allMatches(req, res));

matchesRouter.patch(
  '/:id/finish',
  Autenticador.autenticar,
  (req: Request, res: Response) => matchController.endMatchController(req, res),
);

export default matchesRouter;
