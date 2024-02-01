import { Request, Response } from 'express';
import HTTPMap from '../utils/httpMap';
import UserService from '../service/userService';

export default class UserController {
  constructor(private NewService: UserService = new UserService()) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const response = await this.NewService.login(email, password);
    res.status(HTTPMap(response.status)).json(response.data);
  }
}
