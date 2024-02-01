import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default class Autenticador {
  static autenticar(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const tokenWithoutBearer = token.split(' ')[1];
    try {
      const secret = process.env.JWT_SECRET ?? '';
      const payload = jwt.verify(tokenWithoutBearer, secret);
      console.log(payload);
      res.locals.auth = payload;
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
  }
}
