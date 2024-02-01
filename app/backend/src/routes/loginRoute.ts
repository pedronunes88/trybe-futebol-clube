import { Router, Request, Response } from 'express';
import UserController from '../controller/userController';
import ValidationUser from '../middlewares/validationUser';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post(
  '/',
  ValidationUser.login,
  (req: Request, res: Response) => userController.login(req, res),
);

export default loginRouter;
