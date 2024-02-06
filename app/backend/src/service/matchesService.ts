import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { MatchesInter } from '../Interfaces/matchesInterface';
import { IMatches } from '../Interfaces/IMatches';
import SuperMatches from '../database/models/RealModelMatches';

export default class MatchesServ {
  constructor(private model: IMatches = new SuperMatches()) {}

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
}
