const OB = require('../src/index');

let client;

beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > POST Request', () => {
  test('POST > Standard urlencoded', async () => {
    const response = await client.post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });
    expect(response).toBeDefined();
  });

  test('POST > Json encoded', async () => {
    const response = await client.post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, { type: 'json' });
    expect(response).toBeDefined();
  });

  test('POST > Passing custom header', async () => {
    const response = await client.post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, { headers: { custom: 'header' } });
    expect(response).toBeDefined();
  });

});