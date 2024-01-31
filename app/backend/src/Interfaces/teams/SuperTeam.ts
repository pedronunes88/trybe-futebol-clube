import { Teams } from '../teamsInterface';

export interface SuperTeamModel {
  findAll(): Promise<Teams[]>;
  findByPk(id: number): Promise<Teams | null>;
}
