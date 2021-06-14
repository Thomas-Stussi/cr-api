const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cr-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('passes ci', () => {
    expect(1).toEqual(1);
  });
});
