import { Request, Response } from 'express';
import HTTPMap from '../utils/httpMap';
import MatchesServ from '../service/matchesService';

export default class MatchesController {
  constructor(private mtchService = new MatchesServ()) {}

  public async allMatches(req: Request, res: Response) {
    const ongoingMatches = req.query.inProgress;
    let inProgressOk: boolean | undefined;
    if (typeof ongoingMatches === 'string') {
      inProgressOk = ongoingMatches === 'true';
    }

    const response = await this.mtchService.findAllMatches(inProgressOk);
    return res.status(HTTPMap(response.status)).json(response.data);
  }

  public async endMatchController(req: Request, res: Response) {
    const { id } = req.params;
    const match = req.body;
    const response = await this.mtchService.endMatchesServ(id, match);
    return res.status(200).json(response);
  }

  public async updMatchController(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await
    this.mtchService.updMatchesServ(homeTeamGoals, awayTeamGoals, id);
    return res.status(HTTPMap(status)).json(data);
  }

  public async createMatchController(req: Request, res: Response) {
    const { status, data } = await this.mtchService.createMatchServ(req.body);
    return res.status(HTTPMap(status)).json(data);
  }
}
