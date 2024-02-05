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

  public async endedMatches(id: string) {
    await this.model.endedMatches(id);
    return { status: 'SUCCESSFUL', message: 'Match finshed' };
  }

  public async updMatches(id: string, match: MatchesInter) {
    await this.model.updMatches(id, match);
    return { status: 'SUCCESSFUL', data: { message: 'Match updated' } };
  }
}
