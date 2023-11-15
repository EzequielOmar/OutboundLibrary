const OB = require('../src/index');
const constants = require('./const');

let client;

beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > POST Request', () => {
  test('POST > Standard urlencoded', async () => {
    const response = await client.post(constants.protocol + '//jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });
    expect(response.status).toBe(201);
    expect(response.data.title).toBe('foo');
  });

  test('POST > Json encoded', async () => {
    const response = await client.post(constants.protocol + '//jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, { type: 'json' });
    expect(response.status).toBe(201);
    expect(response.data.title).toBe('foo');
  });
});