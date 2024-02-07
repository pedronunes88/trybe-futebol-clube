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

const NewMatches = {
  homeTeamId: 12,
awayTeamId: 8,
homeTeamGoals: 2,
awayTeamGoals: 2
}

const match1 = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 2,
  awayTeamId: 8,
  awayTeamGoals: 2,
  inProgress: true
}
const matchToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzA2NjY0NzI4LCJleHAiOjE3MDcyNjk1Mjh9.5-jAnVmwyxIjePkikTh-aBRIZV2lvwZcYG9QNbI1DLo"

export {
  matches,
  matchesLive,
  scoreMatchesUpd,
  NewMatches,
  match1,
  matchToken
}