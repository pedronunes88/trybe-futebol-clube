import Teams from './ModelTeams';
import Matches from './ModelMatches';
import { MatchesInter } from '../../Interfaces/matchesInterface';
import { IMatches } from '../../Interfaces/IMatches';
import { MatchesInfo } from '../../Interfaces/matchesTeam';

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

  async findMatchesFilter(query: string): Promise<MatchesInter[]> {
    const matches = await this.matchesModel.findAll({
      where: {
        inProgress: query === 'true',
      },
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
    });
    return matches;
  }

  async endMatches(id: string, match: MatchesInter): Promise<MatchesInter> {
    const matchUpd = await this.matchesModel.findByPk(id);
    if (!matchUpd) {
      throw new Error('Match not found');
    }
    await matchUpd.update({ id: match.id, inProgress: false });
    return matchUpd;
  }

  async updMatches(
    homeTeamGoals: number,
    awayTeamGoals: number,
    id: string,
  ): Promise<MatchesInter> {
    const matchUpd = await this.matchesModel.findByPk(id);
    if (!matchUpd) {
      throw new Error('Match not found');
    }
    await matchUpd.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return matchUpd;
  }

  async createMatch(matchProps: MatchesInfo): Promise<MatchesInter> {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = matchProps;
    try {
      const newMatch = await this.matchesModel.create({
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
        inProgress: true,
      });
      return newMatch;
    } catch (error) {
      throw new Error('Não foi possivel criar a partida');
    }
  }
}
