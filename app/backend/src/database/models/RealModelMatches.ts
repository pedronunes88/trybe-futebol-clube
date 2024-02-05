import Teams from './ModelTeams';
import Matches from './ModelMatches';
import { MatchesInter } from '../../Interfaces/matchesInterface';
import { IMatches } from '../../Interfaces/IMatches';

export default class SuperMatches implements IMatches {
  private matchesModel = Matches;

  async findAllMatches(inProgress?: boolean): Promise<MatchesInter[]> {
    const teams = await this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
    });
    if (inProgress !== undefined) {
      return teams.filter((match) => match.inProgress === inProgress);
    }
    return teams;
  }

  async endedMatches(id: string): Promise<MatchesInter> {
    const match = await this.matchesModel.findByPk(id);
    if (!match) {
      throw new Error('Match not found');
    }
    if (match.inProgress === false) {
      throw new Error('Match already finished');
    }
    await match.update({ inProgress: false });
    return match;
  }

  async updMatches(id: string, match: MatchesInter): Promise<MatchesInter> {
    const matchUpd = await this.matchesModel.findByPk(id);
    if (!matchUpd) {
      throw new Error('Match not found');
    }
    await matchUpd.update(match);
    return matchUpd;
  }
}
