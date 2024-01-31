import Teams from './ModelTeams';
import { SuperTeamModel } from '../../Interfaces/teams/SuperTeam';

export default class SuperTeam implements SuperTeamModel {
  private model = Teams;

  async findAll(): Promise<Teams[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async findByPk(id: number): Promise<Teams | null> {
    const team = await this.model.findByPk(id);
    if (!team) {
      return null;
    }
    return team;
  }
}
