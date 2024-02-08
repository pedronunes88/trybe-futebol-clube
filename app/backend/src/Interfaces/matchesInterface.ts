export interface MatchesInter {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface ScoreboardType {
  name: string;
  totalPoints: number;
  totalGames: number;
  goalsFavor: number;
  goalsOwn: number;
  efficiency: string;
  goalsBalance: number;
  totalVictories: number;
  totalLosses: number;
  totalDraws: number;
}
