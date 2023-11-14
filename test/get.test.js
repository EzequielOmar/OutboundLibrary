const OB = require('../src/index');

let client;

beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > GET request', () => {
  test('GET > With search params', async () => {
    const response = await client.get('http://jsonplaceholder.typicode.com/posts', { userId: 6 });
    expect(response).toBeDefined();
  });
});