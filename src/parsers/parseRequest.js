const http = require('http');
const https = require('https');
const Errors = require('../constants/errors');
const makeResponse = require('./parseResponse');


function makeRequest(url, config, postData) {
  return new Promise((resolve, reject) => {
    const protocol = url.protocol === 'https:' ? https : http;
    const req = protocol.request(url, (res) => makeResponse(res, url, config, resolve, reject));

    req.method = url.method ?? 'GET';

    Object.entries(url.headers || {}).forEach(([key, value]) => {
      req.setHeader(key, value);
    });

    req.setTimeout(config.timeout, () => {
      req.destroy({...Errors.RequestTimedOut, ...{ timeout: config.timeout, url: url.href }});
    });

    req.on('error', (error) => {
      if(error.code === 'ENOTFOUND') reject({...Errors.ENOTFOUND, ...{ url: url.href }})
      reject(error);
    });

    if (postData) {
      req.write(postData);
    }

    req.end();
  });
}

module.exports = makeRequest;