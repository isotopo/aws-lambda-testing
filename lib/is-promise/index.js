const getContext = require('./get-context');
const cbBuilder = require('./cb-builder');


module.exports = (self) => new Promise((resolve, reject) => {
    const cb = cbBuilder(self, reject, resolve);
    const done = cb;
    const ctx = getContext(self, done);
    self.once('timeout', () => cb(new Error(`timeout broken: ${self.timeout}`)));
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        reject(e);
    }
});

