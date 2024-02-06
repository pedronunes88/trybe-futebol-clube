import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { MatchesInter } from '../Interfaces/matchesInterface';
import { IMatches } from '../Interfaces/IMatches';
import SuperMatches from '../database/models/RealModelMatches';
import { MatchesInfo } from '../Interfaces/matchesTeam';
import TeamsService from './teamsService';

export default class MatchesServ {
  constructor(
    private model: IMatches = new SuperMatches(),
    private service = new TeamsService(),
  ) {}

  public async findAllMatches(inProgress?: boolean): Promise<ServiceResponse<MatchesInter[]>> {
    const matches = await this.model.findAllMatches(inProgress);
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async endMatchesServ(id: string, match: MatchesInter) {
    await this.model.endMatches(id, match);
    return { status: 'SUCCESSFUL', message: 'Match updated' };
  }

  public async updMatchesServ(homeTeamGoals: number, awayTeamGoals: number, id: string) {
    await this.model.updMatches(homeTeamGoals, awayTeamGoals, id);
    return { status: 'SUCCESSFUL', data: 'Match updated' };
  }

  public async createMatchServ(matchProps: MatchesInfo) {
    const { homeTeamId, awayTeamId } = matchProps;
    const teamValid1 = await this.service.getTeamById(homeTeamId);
    const teamValid2 = await this.service.getTeamById(awayTeamId);

    if (teamValid1.status === 'NOT_FOUND' || teamValid2.status === 'NOT_FOUND') {
      return { status: 'NOT_FOUND', message: 'There is no team with such id!' };
    }
    const newMatch = await this.model.createMatch(matchProps);
    return { status: 'CREATED', data: newMatch };
  }
}
