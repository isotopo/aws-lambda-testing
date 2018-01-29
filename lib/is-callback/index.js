const getContext = require('./get-context');
const cbBuilder = require('./cb-builder');

module.exports = (self) => {
    const cb = cbBuilder(self);
    const ctx = getContext(self, cb);
    self.once('timeout', () => cb(new Error(`timeout broken: ${self.timeout}`)));
    process.nextTick(self.handler.bind(self.ctx), self.params, ctx, cb);
    return self;
};


