'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const req = supertest(server.app);

describe('validator module', () => {
  it('first ', async () => {
    const res = await req.get('/person')
    expect(res.status).toEqual(500);
  });

  it('secound ', async () => {
    const res = await req.get('/person?name=Anwar')
    expect(res.body).toStrictEqual({ name: 'Anwar' })
    expect(res.status).toEqual(200);
  });
});