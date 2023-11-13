const outbound_lib = require('../src/index');

describe('POST Request', () => {
  test('POST > Standard urlencoded', async () => {
    const response = await outbound_lib.post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });
    expect(response).toBeDefined();
  });


  test('POST > Json', async () => {
    const response = await outbound_lib.post('http://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, 'json');
    expect(response).toBeDefined();
  });
});