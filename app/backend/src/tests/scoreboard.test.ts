import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, singleTeam, allTeams } from './mocks/mockTeams';
import Teams from '../database/models/ModelTeams';
import { Response } from 'superagent';
import Matches from '../database/models/ModelMatches';
import { matches, matchesLive, scoreMatchesUpd } from '../tests/mocks/mockMatches';


chai.use(chaiHttp);

const { expect } = chai;

describe('teste scoreboard', () => {
  beforeEach(() => {
    sinon.restore();
  });
  // it('Checa se retornar no leaderboard', async function() {
  //   sinon.stub(Teams, 'findAll').resolves(allTeams as any);
  //   sinon.stub(Matches, 'findAll').resolves(matches as any);
  //   const {status, body} = await chai.request(app).get('/leaderboard/home');
  //   expect(status).to.be.eq(200);
  //   expect(body).to.be.deep.eq(allTeams);
  // });
  // it('Checa se retornar no leaderboard', async function() {
  //   sinon.stub(Teams, 'findAll').resolves(allTeams as any);
  //   sinon.stub(Matches, 'findAll').resolves(matches as any);
  //   const {status, body} = await chai.request(app).get('/leaderboard');
  //   expect(status).to.be.eq(200);
  //   expect(body).to.be.deep.eq(allTeams);
  // });
  });