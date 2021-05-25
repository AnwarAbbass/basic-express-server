'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const req = supertest(server.app);

describe('server test', () => {

  it('notfound rout error ', async () => {
    const res = await req.get('/uuu')
    expect(res.status).toBe(404);
  });

  it('bad rout  ', async () => {
    const res = await req.get('/bad')
    expect(res.status).toBe(500);
  });

  it('real rout ', async () => {
    const res = await req.get('/')
    expect(res.status).toEqual(200);
  });

  it('person rout ', async () => {
    const res = await req.get('/person?name=Anwar')
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Anwar');
  });

});