const getRequest = require('./methods/get');
const postRequest = require('./methods/post');
const putRequest = require('./methods/put');
const patchRequest = require('./methods/patch');
const deleteRequest = require('./methods/delete');


class OB {
    constructor(config = {}) {
        this.defaults = {
            timeout: config.timeout || 5000,
            type: config.type || 'urlencoded', //* Can be: 'json' or 'multipart'
            resType: config.resType || 'json', //* Can be: 'plain'
            headers: config.headers || {}
        };
    }

    get(url, data = {}, config = {}) {
        return getRequest(url, { ...this.defaults, ...config }, data);
    }

    post(url, data, config = {}) {
        return postRequest(url, { ...this.defaults, ...config }, data);
    }

    put(url, data, config = {}) {
        return putRequest(url, { ...this.defaults, ...config }, data);
    }

    patch(url, data, config = {}) {
        return patchRequest(url, { ...this.defaults, ...config }, data);
    }

    delete(url, config = {}) {
        return deleteRequest(url, { ...this.defaults, ...config });
    }
}

module.exports = OB;