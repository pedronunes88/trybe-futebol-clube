import SuperMatches from '../database/models/RealModelMatches';
import SuperTeam from '../database/models/RealModelTeams';
import { totalGames,
  totalWinsHome,
  totalWinsAway,
  totalLosses,
  totalDraws,
  goalsOwn,
  goalsFavor,
  totalPoints,
} from '../Interfaces/Scoreboard';

export default class LeaderBoardServ {
  constructor(
    private model = new SuperMatches(),
    private teamModel = new SuperTeam(),
  ) {}

  public async getLeaderBoard() {
    const teams = await this.teamModel.findAll();
    const matches = await this.model.findAllMatches(undefined);
    const teamsWithScore = teams.map((team) => ({
      name: team.teamName,
      totalGames: totalGames(team.id, matches),
      totalVictories: totalWinsHome(team.id, matches) + totalWinsAway(team.id, matches),
      totalLosses: totalLosses(team.id, matches),
      totalDraws: totalDraws(team.id, matches),
      goalsFavor: goalsFavor(team.id, matches),
      goalsOwn: goalsOwn(team.id, matches),
      totalPoints: totalPoints(team.id, matches),
    }));
    return { status: 'SUCCESSFUL', data: teamsWithScore };
  }
}
