const { URLSearchParams } = require('url');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const Errors = require('../constants/errors');

function handleUrlEncoded(reqUrl, config, data) {
    reqUrl.headers = {...config.headers, ...{ 'Content-Type': 'application/x-www-form-urlencoded' }};
    return (new URLSearchParams(data)).toString();
}
  
function handleJsonEncoded(reqUrl, config, data) {
    reqUrl.headers = {...config.headers, ...{ 'Content-Type': 'application/json; charset=UTF-8' }};
    return JSON.stringify(data);
}
  
function handleMultipartFormData(reqUrl, config, data) {
    const form = new FormData();
    for (const key in data) {
      const value = data[key];
      if (key === 'files' && Array.isArray(value)) {
        const gralBasePath = data.gralBasePath || '';
        for (const fileObj of value) {
          if (!fileObj.path || !fileObj.type) {
            throw {...Errors.MissingField, ...{ missingField: fileObj.path ? 'type' : 'path' }};
          }
          const basePath = fileObj.basePath || '';
          const filePath = path.resolve(gralBasePath, basePath, fileObj.path);
          if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            throw {...Errors.MissingFile, ...{ filePath: filePath }};
          }
          const fileName = fileObj.path.replace(/^\.\//, '');
          const stats = fs.statSync(filePath);
          form.append(fileName, fs.createReadStream(filePath), { 
            filename: fileName, 
            contentType: fileObj.type,
            knownLength: stats.size,
          });
        }
      } else {
        form.append(key, value);
      }
    }
    reqUrl.headers = {...config.headers, ...form.getHeaders()};
}
  
async function handleContentType(reqUrl, config, data) {
    let postData;
    if (config.type === 'urlencoded') {
      postData = handleUrlEncoded(reqUrl, config, data);
    } else if (config.type === 'json') {
      postData = handleJsonEncoded(reqUrl, config, data);
    } else if (config.type === 'multipart') {
      handleMultipartFormData(reqUrl, config, data);
    }
    return postData;
}

module.exports = handleContentType;