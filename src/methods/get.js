const { URL } = require('url');
const querystring = require('querystring');
const makeRequest = require('../parsers/parseRequest');

function getRequest(url, config, data = {}) {
  const reqUrl = new URL(url);
  if (data) {
    const query = querystring.stringify(data);
    reqUrl.search = query;
  }
  return makeRequest(reqUrl, config, null);
}

module.exports = getRequest;