const OB = require('../src/index');
const constants = require('./const');

let client;

beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > GET request', () => {
  test('GET > With search params', async () => {
    const response = await client.get(constants.protocol + '//jsonplaceholder.typicode.com/posts', { userId: 6 });
    expect(response.status).toBe(200);
    expect(response.data[0].userId).toBe(6);
  });

  test('GET > Plain string response', async () => {
    const response = await client.get(constants.protocol + '//jsonplaceholder.typicode.com/posts', {}, { resType: 'plain' });
    expect(response.status).toBe(200);
    expect(typeof response.data).toBe('string');
  });
});