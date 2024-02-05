import { MatchesInter } from './matchesInterface';

export interface IMatches {
  findAllMatches(inProgress?: boolean): Promise<MatchesInter[]>;
  endedMatches(id: string): Promise<MatchesInter>;
  updMatches(id: string, match: MatchesInter): Promise<MatchesInter>;
}
