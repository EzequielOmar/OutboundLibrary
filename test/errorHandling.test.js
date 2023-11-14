const OB = require('../src/index');

let client;

beforeEach(() => {
  client = new OB();
});

describe('Outbound Library > Error Handling', () => {
  test('GET > Timeout Handling', async () => {
    const timeout = 1000;
    try {
      await client.get('http://httpbin.org/delay/5', {}, { timeout: timeout });
    } catch (error) {
      expect(error.code).toBe('RequestTimedOut');
      expect(error.status).toBe(503);
    }
  });

  test('GET > Connection Issues Handling', async () => {
    try {
      await client.get('http://invalidurl.example');
    } catch (error) {
      expect(error.code).toBe('ENOTFOUND');
      expect(error.status).toBe(404);
    }
  });

  test('GET > Server Errors Handling', async () => {
    try {
      console.warn(await client.get('http://httpbin.org/status/500'));
    } catch (error) {
      expect(error.code).toBe('InternalServerError');
      expect(error.status).toBe(500);
    }
  });
});
