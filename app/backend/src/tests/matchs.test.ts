import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, singleTeam } from './mocks/mockTeams';
import Teams from '../database/models/ModelTeams';
import { Response } from 'superagent';
import Matches from '../database/models/ModelMatches';
import { matches, matchesLive, scoreMatchesUpd, NewMatches, match1 } from '../tests/mocks/mockMatches';
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
  it('Checa caso não envie um token', async function () {
    const { status, body } = await chai.request(app).post("/matches")
    .send(NewMatches)

    expect(status).to.be.equal(401)
    expect(body).to.be.deep.equal({ message: 'Token not found' })
  })

  it('Checa se retorna erro caso seja um token inválido', async function () {

    sinon.stub(jwt, 'verify').throws(new Error('Token must be a valid token'))
    const { status, body } = await chai.request(app).post("/matches")
    .set({'Authorization': `Bearer any-token`})
    .send(NewMatches)

    expect(status).to.be.equal(401)
    expect(body).to.be.deep.equal({ message: 'Token must be a valid token' })
  });

  it('erro caso seja enviado um token inválido', async function () {

    sinon.stub(jwt, 'verify').throws(new Error('Token must be a valid token'))
    const { status, body } = await chai.request(app).post("/matches")
    .set({'Authorization': `Bearer any-token`})
    .send(NewMatches)

    expect(status).to.be.equal(401)
    expect(body).to.be.deep.equal({ message: 'Token must be a valid token' })
  });
  // it('Checa se termina a partida', async function () {
  //   sinon.stub(Matches, 'findByPk').resolves(match1 as any);
  //   sinon.stub(Matches, 'update').resolves(undefined);
  //   const { status, body } = await chai.request(app).patch("/matches/1/finish").set('Authorization', token);
  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal({ message: 'Match finished' });
  // });
  it('checa se avisa q ta faltando token pra terminar partida', async function () {
    sinon.stub(Matches, 'findByPk').resolves(match1 as any);
    sinon.stub(Matches, 'update').resolves(undefined);
    const { status, body } = await chai.request(app).patch("/matches/1/finish");
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Token not found' });
  });
  // it('checa se atualiza partida score', async function () {
  //   sinon.stub(Matches, 'findByPk').resolves(match1 as any);
  //   sinon.stub(Matches, 'update').resolves(undefined);
  //   const { status, body } = await chai.request(app).patch('/matches/1').set('Authorization', token);
  //   expect(status).to.be.equal(200);
  //   expect(body).to.be.deep.equal(match1);
  // });
});