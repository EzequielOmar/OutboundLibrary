const OB = require('../src/index');
const constants = require('./const');

let client;
beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > PUT Request', () => {
  test('PUT > Standard urlencoded', async () => {
    const response = await client.put(constants.protocol + '//jsonplaceholder.typicode.com/posts/1', { id: 1, title: 'foo', body: 'bar', userId: 1 });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('foo');
  });

  test('PUT > Json encoded', async () => {
    const response = await client.put(constants.protocol + '//jsonplaceholder.typicode.com/posts/1', { id: 1, title: 'foo', body: 'bar', userId: 1 }, { type: 'json' });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('foo');
  });
});