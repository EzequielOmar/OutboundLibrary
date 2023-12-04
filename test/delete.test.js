const OB = require('../src/index');
const constants = require('./const');

let client;
beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > DELETE Request', () => {
  test('DELETE > Delete User', async () => {
    const response = await client.delete(constants.protocol + `//jsonplaceholder.typicode.com/posts/1`);
    expect(response.status).toBe(200);
  });
});