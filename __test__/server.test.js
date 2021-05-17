'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const req = require(server.app);

describe('server test', () => {

  it('notfound rout error ', async () => {
    const res = await req.get('/uuu')
    expect(res.status).toBe(404);
  });

  it('real rout ', async () => {
    const res = await req.get('/')
    expect(res.status).toEqual(200);
  });

});