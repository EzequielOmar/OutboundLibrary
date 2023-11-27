const { URL, URLSearchParams } = require('url');

const handleRequest = require('../handlers/handleRequest');


async function getRequest(url, config, data = {}) {
  const reqUrl = new URL(url);
  if (Object.entries(data).length > 0) {
    const query = new URLSearchParams(data);
    reqUrl.search = query.toString();
  }
  return handleRequest(reqUrl, config, null);
}

module.exports = getRequest;