import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import RealModelUser from '../database/models/RealModelUser';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { LoginModel } from '../Interfaces/ModelLogin';

type e = { token: string };

export default class UserService {
  constructor(
    private NewLogin: LoginModel = new RealModelUser(),
  ) {}

  public async login(email: string, password: string): Promise<ServiceResponse<e>> {
    const user = await this.NewLogin.findOne(email);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '10h' });
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
