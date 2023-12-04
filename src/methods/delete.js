const { URL } = require('url');
const handleRequest = require('../handlers/handleRequest');


async function deleteRequest(url, config) {
  const reqUrl = new URL(url);
  reqUrl.method = 'DELETE';
  return handleRequest(reqUrl, config, null);
}

module.exports = deleteRequest;