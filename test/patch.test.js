const OB = require('../src/index');
const constants = require('./const');

let client;
beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > PATCH Request', () => {
  test('PATCH > Standard urlencoded', async () => {
    const response = await client.patch(constants.protocol + '//jsonplaceholder.typicode.com/posts/1', { title: 'foo' });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('foo');
  });

  test('PATCH > Json encoded', async () => {
    const response = await client.patch(constants.protocol + '//jsonplaceholder.typicode.com/posts/1', { title: 'foo' }, { type: 'json' });
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('foo');
  });
});