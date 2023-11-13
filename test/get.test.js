const outbound_lib = require('../src/index');

xdescribe('GET request', () => {
  test('GET > With search params', async () => {
    const response = await outbound_lib.get('http://jsonplaceholder.typicode.com/posts', { userId: 6 });
    expect(response).toBeDefined();
  });
});