import { Request, Response } from 'express';
import TeamsService from '../service/teamsService';
import HTTPMap from '../utils/httpMap';

export default class TeamsController {
  constructor(
    private teamsService = new TeamsService(),
  ) {}

  async getAllTeams(_req: Request, res: Response) {
    const teams = await this.teamsService.getAllTeams();
    // console.log(teams);
    return res.status(HTTPMap(teams.status)).json(teams.data);
  }

  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.teamsService.getTeamById(Number(id));
    return res.status(HTTPMap(team.status)).json(team.data);
  }
}
