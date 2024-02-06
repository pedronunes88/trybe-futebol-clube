import { MatchesInter } from './matchesInterface';

export interface IMatches {
  findAllMatches(inProgress?: boolean): Promise<MatchesInter[]>;
  endMatches(id: string, match: MatchesInter): Promise<MatchesInter>;
  updMatches(awayTeamGoals: number, homeTeamGoals: number,
    id: string): Promise<MatchesInter>;
}
