const Errors = require('../constants/errors');


function handleResponse(res, url, config, resolve, reject) {
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
}

module.exports = handleResponse;