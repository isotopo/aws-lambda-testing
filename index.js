const isPromise = require('./lib/is-promise');
const isCallback = require('./lib/is-callback');

const getRemainingTimeInMillis = () => 30000;


class awsTest {
    constructor(handler, params, cb, ctx) {
        if (handler) this.addHandler(handler);
        this.ctx = ctx || {};
        this.params = params || {};
        if (typeof cb === 'function') this._cb = cb;
    }
    exec(params, callback) {
        console.log('params, callback', params, callback);
        if (typeof this.handler !== 'function') return Promise.reject(new Error('Handler is not a function: ', typeof this.handler));

        this.addCallback(callback);
        this.params = params;
        const self = this;
        console.log('self._cb ', self._cb);
        if (!self._cb) return isPromise(self, getRemainingTimeInMillis);
        isCallback(self, getRemainingTimeInMillis);
        return this;
    }
    addHandler(handler) {
        if (typeof handler !== 'function') throw new Error('Handler should a functio you pass: ', typeof handler);
        this.handler = handler;
        if (handler) handler.called = false;
        return this;
    }
    addParams(params) {
        this.params = params;
        return this;
    }
    addCallback(cb) {
        if (typeof cb === 'function') this._cb = cb;
        return this;
    }
    addCtx(ctx) {
        this.ctx = ctx;
        return this;
    }

    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }
}
module.exports = awsTest;
