import { Request, Response } from 'express';
import LeaderBoardServ from '../service/scoreboardService';

export default class LeaderBoardController {
  constructor(private lbService = new LeaderBoardServ()) {}

  public async getLeaderBoard(req: Request, res: Response) {
    const { data } = await this.lbService.getLeaderBoard();
    return res.status(200).json(data);
  }
}
