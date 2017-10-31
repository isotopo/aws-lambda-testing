const Exec = require('./exec-class');
module.exports = class extends Exec {
    constructor() {
        super();
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

};
