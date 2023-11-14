const getRequest = require('./get');
const postRequest = require('./post');

class OB {
    constructor() {
        this.defaults = {
            timeout: 5000,
            type: 'urlencoded'
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