import { Users } from '../../Interfaces/userInterface';
import SuperUser from './ModelUser';
import { LoginModel } from '../../Interfaces/ModelLogin';

export default class RealModelUser implements LoginModel {
  private model = SuperUser;

  async getAllUsers(): Promise<Users[]> {
    const users = await this.model.findAll();
    return users;
  }

  async findOne(email: string): Promise<Users | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }
}
