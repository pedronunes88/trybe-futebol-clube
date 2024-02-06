import { Request, Response, NextFunction } from 'express';

export default class matchValidate {
  static validMatch(req: Request, res: Response, next: NextFunction) {
    const { homeTeamId, awaytTeamId } = req.body;
    if (homeTeamId === awaytTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    next();
  }
}
