const { URL } = require('url');
const querystring = require('querystring');
const makeRequest = require('./httpRequest');

function postRequest(url, config, data) {
  const reqUrl = new URL(url);
  let postData;

  if (config.type === 'urlencoded') {
    postData = querystring.stringify(data);
    reqUrl.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...config.headers,
    };
  } else if (config.type === 'json') {
    postData = JSON.stringify(data);
    reqUrl.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      ...config.headers,
    };
  }

  reqUrl.method = 'POST';
  reqUrl.headers['Content-Length'] = Buffer.byteLength(postData);
  
  return makeRequest(reqUrl, config, postData);
}

module.exports = postRequest;