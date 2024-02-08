import SuperMatches from '../database/models/RealModelMatches';
import SuperTeam from '../database/models/RealModelTeams';
import {
  totalGamesHome,
  totalWinsHome,
  goalsBalance,
  totalLossesHome,
  efficiency,
  totalDrawsHome,
  teamsSorted,
  goalsOwnHome,
  goalsFavorHome,
  totalPointsHome,
} from '../Interfaces/Scoreboard';

export default class LeaderBoardServ {
  constructor(
    private model = new SuperMatches(),
    private teamModel = new SuperTeam(),
  ) {}

  public async getLeaderBoard() {
    const teams = await this.teamModel.findAll();
    const matches = await this.model.findMatchesFilter('false');
    const teamsWithScore = teams.map((team) => ({
      name: team.teamName,
      totalPoints: totalPointsHome(team.id, matches),
      totalGames: totalGamesHome(team.id, matches),
      totalVictories: totalWinsHome(team.id, matches),
      totalDraws: totalDrawsHome(team.id, matches),
      totalLosses: totalLossesHome(team.id, matches),
      goalsFavor: goalsFavorHome(team.id, matches),
      goalsOwn: goalsOwnHome(team.id, matches),
      goalsBalance: goalsBalance(team.id, matches),
      efficiency: efficiency(team.id, matches),
    }));
    teamsSorted(teamsWithScore);
    return { status: 'SUCCESSFUL', data: teamsWithScore };
  }
}
