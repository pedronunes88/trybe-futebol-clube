import { Model, QueryInterface, DataTypes } from 'sequelize';
import {Users}  from '../../Interfaces/userInterface';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Users>>(
      'users',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'username',
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'password',
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'email',
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'role',
        }
      });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};