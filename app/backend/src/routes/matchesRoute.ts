import { Response, Request, Router } from 'express';
import MatchesController from '../controller/matchesController';
import Autenticador from '../middlewares/autenticadorToken';
import matchValidate from '../middlewares/validateMatch';

const matchesRouter = Router();

const matchController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchController.allMatches(req, res));

matchesRouter.patch(
  '/:id/finish',
  Autenticador.autenticar,
  (req: Request, res: Response) => matchController.endMatchController(req, res),
);

matchesRouter.patch(
  '/:id',
  Autenticador.autenticar,
  (req: Request, res: Response) => matchController.updMatchController(req, res),
);

matchesRouter.post(
  '/',
  Autenticador.autenticar,
  matchValidate.validMatch,
  (req: Request, res: Response) => matchController.createMatchController(req, res),
);

export default matchesRouter;
