import { Model, QueryInterface, DataTypes } from 'sequelize';
import {Teams}  from '../../Interfaces/teamsInterface';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<{id: number, team_name: string}>>(
      'teams',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        team_name: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'team_name',
        }
      });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('teams');
  },
};