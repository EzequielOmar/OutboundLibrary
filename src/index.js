const getRequest = require('./methods/get');
const postRequest = require('./methods/post');

class OB {
    constructor(config = {}) {
        this.defaults = {
            timeout: config.timeout || 5000,
            type: config.type || 'urlencoded', //* Can be: 'json'
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
}

module.exports = OB;