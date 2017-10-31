const Exec = require('./exec-class');
module.exports = class extends Exec {
    constructor() {
        super();
    }
    setHandler(handler) {
        if (typeof handler !== 'function') throw new Error('Handler should a functio you pass: ', typeof handler);
        this.handler = handler;
        if (handler) handler.called = false;
        return this;
    }
    setParams(params) {
        this.params = params;
        return this;
    }
    setCallback(cb) {
        if (typeof cb === 'function') this._cb = cb;
        return this;
    }
    setCtx(ctx) {
        this.ctx = ctx;
        return this;
    }

};
