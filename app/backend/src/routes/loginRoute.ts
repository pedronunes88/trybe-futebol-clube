import { Router, Request, Response } from 'express';
import UserController from '../controller/userController';
import ValidationUser from '../middlewares/validationUser';
import Autenticador from '../middlewares/autenticadorToken';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post(
  '/',
  ValidationUser.login,
  (req: Request, res: Response) => userController.login(req, res),
);

loginRouter.get(
  '/role',
  Autenticador.autenticar,
  (_req: Request, res: Response) => res.status(200).json({ role: res.locals.auth.role }),
);

export default loginRouter;
