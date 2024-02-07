const matches = [
  {
    id: 1,
    homeTeamId: 16,
    awayTeamId: 8,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  
];

const matchesLive = [
  {
    id: 41,
    homeTeamId: 16,
    awayTeamId: 9,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  
];

const scoreMatchesUpd ={
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}

export {
  matches,
  matchesLive,
  scoreMatchesUpd
}