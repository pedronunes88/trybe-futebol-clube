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
import { matches, matchesLive, scoreMatchesUpd, NewMatches } from '../tests/mocks/mockMatches';
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
  
});