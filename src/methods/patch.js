const { URL } = require('url');
const handleContentType = require('../handlers/handleContentType');
const handleRequest = require('../handlers/handleRequest');

async function patchRequest(url, config, data) {
  const reqUrl = new URL(url);
  reqUrl.method = 'PATCH';
  const postData = await handleContentType(reqUrl, config, data);
  reqUrl.headers['Content-Length'] = Buffer.byteLength(postData ?? '');
  return handleRequest(reqUrl, config, postData);
}

module.exports = patchRequest;