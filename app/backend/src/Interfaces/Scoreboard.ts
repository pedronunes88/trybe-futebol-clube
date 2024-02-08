import { MatchesInter, ScoreboardType } from './matchesInterface';

const totalGamesHome = (teamId: number, matches: MatchesInter[]): number => {
  const total = matches.filter(
    (match) => teamId === match.homeTeamId,
  );
  return total.length;
};

const totalGamesAway = (teamId: number, matches: MatchesInter[]): number => {
  const total = matches.filter(
    (match) => match.awayTeamId === teamId,
  );
  return total.length;
};

const totalWinsHome = (teamId: number, matches: MatchesInter[]): number => {
  const vitorias = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals);
  return vitorias.length;
};

const totalWinsAway = (teamId: number, matches: MatchesInter[]): number => {
  const vitorias = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals);
  return vitorias.length;
};

const totalLossesHome = (teamId: number, matches: MatchesInter[]): number => {
  const lossesHome = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals);
  return lossesHome.length;
};
const totalLossesAway = (teamId: number, matches: MatchesInter[]): number => {
  const lossesAway = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals);
  return lossesAway.length;
};

const totalDrawsHome = (teamId: number, matches: MatchesInter[]): number => {
  const drawsH = matches
    .filter((match) => match.homeTeamId === teamId
      && match.awayTeamGoals === match.homeTeamGoals);
  return drawsH.length;
};

const totalDrawsAway = (teamId: number, matches: MatchesInter[]): number => {
  const draws = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals === match.homeTeamGoals);
  return draws.length;
};

const totalPointsHome = (teamId: number, matches: MatchesInter[]): number => {
  const drawsHome = totalDrawsHome(teamId, matches) * 1;
  const totalWins = totalWinsHome(teamId, matches) * 3;
  const finalPoints = drawsHome + totalWins;
  console.log(finalPoints);
  return finalPoints;
};

const totalPointsAway = (teamId: number, matches: MatchesInter[]): number => {
  const drawsAway = totalDrawsAway(teamId, matches) * 1;
  const totalWins = totalWinsAway(teamId, matches) * 3;
  const finalPoints = drawsAway + totalWins;
  return finalPoints;
};

const goalsOwnHome = (teamId: number, matches: MatchesInter[]): number => {
  const goalsTakenHome = matches.reduce((acc, match) => {
    let soma = acc;
    if (match.homeTeamId === teamId) {
      soma += match.awayTeamGoals;
    }
    return soma;
  }, 0);
  return goalsTakenHome;
};

const goalsOwnAway = (teamId: number, matches: MatchesInter[]): number => {
  const goalsTakenAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  return goalsTakenAway;
};

const goalsFavorHome = (teamId: number, matches: MatchesInter[]): number => {
  const goalsScoredHome = matches
    .filter((match) => match.homeTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  return goalsScoredHome;
};

const goalsFavorAway = (teamId: number, matches: MatchesInter[]): number => {
  const goalsScoredAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  return goalsScoredAway;
};

const goalsBalance = (teamId: number, matches: MatchesInter[]): number => {
  const goalsFavor = goalsFavorHome(teamId, matches);
  const goalsTaken = goalsOwnHome(teamId, matches);
  const goalsSaldo = goalsFavor - goalsTaken;
  return goalsSaldo;
};

const efficiency = (teamId: number, matches: MatchesInter[]): string => {
  const points = totalPointsHome(teamId, matches);
  const games = totalGamesHome(teamId, matches);
  const efficiencyTeam = ((points / (games * 3)) * 100).toFixed(2);
  return efficiencyTeam;
};

const teamsSorted = (team: ScoreboardType[]): ScoreboardType[] => {
  team.sort((a, b) =>
    b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance || b.goalsFavor - a.goalsFavor);
  return team;
};

export {
  totalGamesHome,
  totalGamesAway,
  totalWinsHome,
  totalWinsAway,
  totalLossesHome,
  totalLossesAway,
  totalDrawsAway,
  totalDrawsHome,
  goalsOwnAway,
  goalsOwnHome,
  goalsFavorAway,
  goalsFavorHome,
  totalPointsAway,
  totalPointsHome,
  goalsBalance,
  efficiency,
  teamsSorted,
};
