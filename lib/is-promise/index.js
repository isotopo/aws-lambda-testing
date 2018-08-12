const getContext = require('./get-context');
const cbBuilder = require('./cb-builder');

const eventBrokenDefault = 'timeoutBroken';
const {
    EVENT_TIMEOUT: eventTimeOutBrokenName = eventBrokenDefault
} = process.env;
module.exports = (self) => new Promise((resolve, reject) => {
    const cb = cbBuilder(self, reject, resolve);
    const ctx = getContext(self, cb);
    self.once(eventTimeOutBrokenName, () => cb(new Error(`timeout ${self.timeout} broken`)));
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (error) {
        reject(error);
    }
});

