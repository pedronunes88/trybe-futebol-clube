import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, singleTeam } from './mocks/mockTeams';
import Teams from '../database/models/ModelTeams';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('teste team models', () => {
  beforeEach(() => {
    sinon.restore();
  });
  it('Deve retornar um array de times', async function() {
    sinon.stub(Teams, 'findAll').resolves(teams as any);

    const {status, body} = await chai.request(app).get('/teams');

    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(teams);
  });
  it('Deve retornar um time pelo id', async function() {
    sinon.stub(Teams, 'findByPk').resolves(singleTeam as any);

    const {status, body} = await chai.request(app).get('/teams/1');

    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(singleTeam);
  });
  it('Deve retornar um erro 404', async function() {
    sinon.stub(Teams, 'findByPk').resolves(null);

    const {status, body} = await chai.request(app).get('/teams/666');

    expect(status).to.be.eq(404);
    expect(body).to.be.deep.eq( { message: 'Team not found'} );
  });
});
