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
import HTTPMap from '../utils/httpMap';

chai.use(chaiHttp);

const { expect } = chai;

describe('teste httpmap', () => {
  beforeEach(() => {
    sinon.restore();
  });
  it('Checa se o httpmap retorna status correto', async function() {
    const success = HTTPMap( 'SUCCESSFUL');
    expect(success).to.be.eq(200);
  });
  it('Checa se o httpmap retorna status correto', async function() {
    const notFound = HTTPMap( 'NOT_FOUND');
    expect(notFound).to.be.eq(404);
  });
  it('Checa se o httpmap retorna status correto', async function() {
    const error = HTTPMap( 'ERROR');
    expect(error).to.be.eq(500);
  });
  it('Checa se o httpmap retorna status correto', async function() {
    const unauthorized = HTTPMap( 'UNAUTHORIZED');
    expect(unauthorized).to.be.eq(401);
  });
  it('Checa se o httpmap retorna status correto', async function() {
    const created = HTTPMap( 'CREATED');
    expect(created).to.be.eq(201);
  });
});