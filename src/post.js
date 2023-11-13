const { URL } = require('url');
const querystring = require('querystring');
const makeRequest = require('./httpRequest');

function post(url, data, type = 'urlencoded', headers = {}) {
  const options = new URL(url);
  let postData;

  if (type === 'urlencoded') {
    postData = querystring.stringify(data);
    options.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...headers,
    };
  } else if (type === 'json') {
    postData = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      ...headers,
    };
  }

  options.method = 'POST';
  options.headers['Content-Length'] = Buffer.byteLength(postData);

  return makeRequest(options, postData);
}

module.exports = post;