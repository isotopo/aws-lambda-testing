const getContext = require('./get-context');
const cbBuilder = require('./cb-builder');

module.exports = (self) => {
    const cb = cbBuilder(self);
    const done = cb;
    const ctx = getContext(self, done);
    self.once('timeout', () => cb(new Error(`timeout broken: ${self.timeout}`)));
    process.nextTick(self.handler.bind(self.ctx), self.params, ctx, cb);
    return self;
};


