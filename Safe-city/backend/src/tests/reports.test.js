const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Reports API', () => {
  beforeAll(async () => {
    // connect to a test mongo instance (or mocking)
    await mongoose.connect(process.env.MONGODB_URI_TEST);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('create report requires auth', async () => {
    const res = await request(app).post('/api/reports').send({});
    expect(res.statusCode).toBe(401);
  });
});
