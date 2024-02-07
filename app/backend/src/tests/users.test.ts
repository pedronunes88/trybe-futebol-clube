import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, singleTeam } from './mocks/mockTeams';
import Teams from '../database/models/ModelTeams';
import { Response } from 'superagent';
import { invalidUser, invalidEmail, invalidPassword, loginOk, token} from './mocks/mockUser';


chai.use(chaiHttp);

const { expect } = chai;

describe('teste users login', () => {
  beforeEach(() => {
    sinon.restore();
  });
  it('Deve retornar erro sem email e sem login', async function() {
    const {status, body} = await chai.request(app).post('/login');
    expect(status).to.be.eq(400);
    expect(body).to.be.deep.eq({ message: 'All fields must be filled' });
  })
  it('Deve retornar erro com email inválido', async function() {
    const {status, body} = await chai.request(app).post('/login').send({ email: '@xablau.com', password: 'secret_admin' });
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Invalid email or password' });
  })
  it('Deve retornar erro com senha faltando', async function() {
    const {status, body} = await chai.request(app).post('/login').send({ email: 'admin@admin.com'})
    expect(status).to.be.eq(400)
    expect(body).to.be.deep.eq({ message: 'All fields must be filled' });
  })
  it('Deve retornar erro com email com formato errado', async function() {
    const {status, body} = await chai.request(app).post('/login').send({ email: 'xablau.com', password: '12345678' });
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Invalid email or password' });
  })
  it('Deve retornar erro se nao tiver token no role', async function() {
    const {status, body} = await chai.request(app).get('/login/role').send();
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Token not found' });
  })
  it('Deve retornar erro se senhar estiver errada', async function() {
    const {status, body} = await chai.request(app).post('/login').send(invalidPassword);
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Invalid email or password' });
  })
  it('Deve retornar erro com senha menor que 6 caracteres', async function() {
    const {status, body} = await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: '12345' });
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
  it('Deve retornar erro com email inexistente', async function() {
    const {status, body} = await chai.request(app).post('/login').send(invalidEmail);
    expect(status).to.be.eq(401);
    expect(body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
  // it('Deve retornar role certo no login', async function() {
  //   const {status, body} = await chai.request(app).get('/login/role').set('Authorization', token);
  //   expect(status).to.equal(200);
  //   expect(body).to.be.deep.eq({ role: 'admin'});
  // });

});