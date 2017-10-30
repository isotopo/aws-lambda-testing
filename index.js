const isPromise = require('./lib/is-promise');
const isCallback = require('./lib/is-callback');
const eventEmmiter = require('events');
const timeOutDefault = 3000;

class awsTest extends eventEmmiter {
    constructor(handler, params, cb, ctx) {
        super();
        if (handler) this.addHandler(handler);
        this.ctx = ctx || {};
        this.params = params || {};
        this.timeout = timeOutDefault;
        this.init = NaN;
        if (typeof cb === 'function') this._cb = cb;
    }
    getRemainingTimeInMillis() {
        if (!this.init) return this.init;

        return Date.now() - this.init;
    }
    exec(params, callback) {
        this.removeAllListeners('timeout');
        if (typeof this.handler !== 'function') return Promise.reject(new Error('Handler is not a function: ', typeof this.handler));
        
        this.setTimeOutEvent();
        this.init = Date.now();
        this.addCallback(callback);
        this.params = params;
        const self = this;
        if (!self._cb) return isPromise(self);
        isCallback(self);
        return this;
    }
    setTimeOutEvent(){
        this.timerTimeOut = setTimeout(() => this.emit('timeout'), this.timeout);
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
