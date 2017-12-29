const isPromise = require('./is-promise');
const isCallback = require('./is-callback');
const MemoryUsage = require('./memory-usage-class');
const eventsConfig = require('./events');

const unitMemoryUsage = 1024 * 1024;

module.exports = class extends MemoryUsage {
    constructor() {
        super();
    }
    exec(_params, callback) {
        const params = eventsConfig[_params] || _params;
        const self = this;
        this.params = params;
        if (typeof this.handler !== 'function') return Promise.reject(new Error('Handler is not a function: ', typeof this.handler));

        this.setCallback(callback);
        this.removeAllListeners('timeout');
        this._setTimeOutEvent();
        this._init = Date.now() + this.timeout;
        this._memoryUsageInit = process.memoryUsage().heapUsed / unitMemoryUsage;

        if (!self._cb) return isPromise(self);

        return isCallback(self);
    }
};
