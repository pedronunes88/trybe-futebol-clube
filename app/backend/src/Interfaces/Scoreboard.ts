import { MatchesInter } from './matchesInterface';

const totalGames = (teamId: number, matches: MatchesInter[]): number => {
  const total = matches.filter(
    (match) => match.homeTeamId === teamId || match.awayTeamId === teamId,
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

const totalLosses = (teamId: number, matches: MatchesInter[]): number => {
  const lossesHome = matches
    .filter((match) => match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals);
  const lossesAway = matches
    .filter((match) => match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals);
  const total = lossesHome.length + lossesAway.length;
  return total;
};

const totalDraws = (teamId: number, matches: MatchesInter[]): number => {
  const draws = matches
    .filter((match) => (match.homeTeamId === teamId || match.awayTeamId === teamId)
      && match.homeTeamGoals === match.awayTeamGoals);
  return draws.length;
};

const totalPoints = (teamId: number, matches: MatchesInter[]): number => {
  const wins = totalWinsHome(teamId, matches) + totalWinsAway(teamId, matches);
  const draws = totalDraws(teamId, matches);
  return (wins * 3) + draws;
};

const goalsOwn = (teamId: number, matches: MatchesInter[]): number => {
  const goalsTakenHome = matches
    .filter((match) => match.homeTeamId === teamId)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  const goalsTakenAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  return goalsTakenHome + goalsTakenAway;
};

const goalsFavor = (teamId: number, matches: MatchesInter[]): number => {
  const goalsScoredHome = matches
    .filter((match) => match.homeTeamId === teamId)
    .reduce((acc, match) => acc + match.homeTeamGoals, 0);
  const goalsScoredAway = matches
    .filter((match) => match.awayTeamId === teamId)
    .reduce((acc, match) => acc + match.awayTeamGoals, 0);
  return goalsScoredHome + goalsScoredAway;
};

export {
  totalGames,
  totalWinsHome,
  totalWinsAway,
  totalLosses,
  totalDraws,
  goalsOwn,
  goalsFavor,
  totalPoints,
};
