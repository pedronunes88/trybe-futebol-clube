import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, singleTeam } from './mocks/mockTeams';
import Teams from '../database/models/ModelTeams';
import { Response } from 'superagent';
import Matches from '../database/models/ModelMatches';
import { matches, matchesLive, scoreMatchesUpd } from '../tests/mocks/mockMatches';
import { token } from './mocks/mockUser';
import SuperMatches from '../database/models/RealModelMatches';

chai.use(chaiHttp);

const { expect } = chai;

describe('teste matches', () => {
  beforeEach(() => {
    sinon.restore();
  });
  it('Checa se retorna todos os matches', async function() {
    sinon.stub(Matches, 'findAll').resolves(matches as any);
    const {status, body} = await chai.request(app).get('/matches');
    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(matches);
  });
  it('Checa se retorna um match pelo id', async function() {
    sinon.stub(Matches, 'findAll').resolves(matchesLive as any);
    const {status, body} = await chai.request(app).get('/matches').query({ inProgress: 'true' });
    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(matchesLive);
  });
  it('Checa se retorna um match pelo id FALSE', async function() {
    sinon.stub(Matches, 'findAll').resolves(matches as any);
    const {status, body} = await chai.request(app).get('/matches').query({ inProgress: 'false' });
    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(matches);
  });
  // it('Checa se nao encontra nenhuma partida', async function() {
  //   sinon.stub(Matches, 'findAll').resolves([]);
  //   const {status, body} = await chai.request(app).get('/matches');
  //   expect(status).to.be.eq(404);
  //   expect(body).to.be.deep.eq({ message: 'Teams not found' });
  // });
  // it('Checa se atualiza progresso da partida', async function() {
  //   sinon.stub(Matches, 'update').resolves();
  //   const {status, body} = await chai.request(app).patch('/matches/1').send(scoreMatchesUpd).set('Authorization', token);
  //   expect(status).to.equal(200);
  //   expect(body).to.be.deep.eq({ message: 'Match updated' });
  // });
});