import { Users } from './userInterface';

export interface LoginModel {
  findOne(email: string): Promise<Users | null>,
}
