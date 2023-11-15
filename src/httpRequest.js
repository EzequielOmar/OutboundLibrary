const http = require('http');
const https = require('https');
const Errors = require('./errors');


function makeRequest(url, config, postData) {
  return new Promise((resolve, reject) => {
    const protocol = url.protocol === 'https:' ? https : http;

    const req = protocol.request(url, (res) => {
      if(res.statusCode === 500) {
        reject({...Errors.InternalServerError, ...{url: url.href}})
      }
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        let resData;
        if (data) {
          resData = config.resType === 'plain' ? data : JSON.parse(data ?? '');
        }
        resolve({ status: res.statusCode, data: resData, dataSize: Buffer.byteLength(data) });
      });
    });

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
