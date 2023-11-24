const { URL } = require('url');
const querystring = require('querystring');
const handleRequest = require('../handlers/handleRequest');

async function getRequest(url, config, data = {}) {
  const reqUrl = new URL(url);
  if (data) {
    const query = querystring.stringify(data);
    reqUrl.search = query;
  }
  return handleRequest(reqUrl, config, null);
}

module.exports = getRequest;