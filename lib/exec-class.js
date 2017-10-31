const isPromise = require('./is-promise');
const isCallback = require('./is-callback');
const eventEmmiter = require('events');
const eventsConfig = require('./events');

module.exports = class extends eventEmmiter {
    constructor() {
        super();
    }
    exec(_params, callback) {
        const params = eventsConfig[_params] || _params;
        const self = this;
        this.params = params;
        if (typeof this.handler !== 'function') return Promise.reject(new Error('Handler is not a function: ', typeof this.handler));

        this.addCallback(callback);
        this._init = Date.now();
        this.removeAllListeners('timeout');
        this._setTimeOutEvent();

        if (!self._cb) return isPromise(self);

        isCallback(self);
        return this;
    }
};
