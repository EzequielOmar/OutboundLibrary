const { URL } = require('url');
const querystring = require('querystring');
const makeRequest = require('./httpRequest');

function get(url, data) {
  const options = new URL(url);
  if (data) {
    const query = querystring.stringify(data);
    options.search = query;
  }
  return makeRequest(options, null);
}

module.exports = get;
