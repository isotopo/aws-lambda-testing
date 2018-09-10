const Exec = require('./exec-class');

const getMessage = (handler) => `Handler should a function you pass: ${typeof handler}`;
module.exports = class extends Exec {
    constructor() {
        super();
    }
    setHandler(handler) {
        if (typeof handler !== 'function') throw new Error(getMessage(handler));
        this.handler = handler;
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
