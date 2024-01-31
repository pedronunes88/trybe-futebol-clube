import SuperTeam from '../database/models/RealModelTeams';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { Teams } from '../Interfaces/teamsInterface';

export default class TeamsService {
  constructor(
    private teamsModel = new SuperTeam(),
  ) {}

  public async getAllTeams(): Promise<ServiceResponse<Teams[]>> {
    const everyTeam = await this.teamsModel.findAll();
    return { status: 'SUCCESSFUL', data: everyTeam };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<Teams>> {
    const team = await this.teamsModel.findByPk(id);
    if (!team) {
      return { status: 'NOT_FOUND', data: { message: 'Team not found' } };
    }
    return { status: 'SUCCESSFUL', data: team };
  }
}
