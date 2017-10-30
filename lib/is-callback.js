module.exports = (self) => {
    const cb = (error, data) => {
        clearTimeout(self._timerTimeOut);
        if (!self._cb) return;
        const _data = data;
        try {
            self._cb.call(self.ctx, error, data);
        } catch (err) {
            throw err;
        }
    };
    const done = cb;
    const ctx = {
        done: done,
        succeed: (data) => done(null, data),
        fail: (error) => done(error, null),
        getRemainingTimeInMillis: self.getRemainingTimeInMillis,
    };
    self.once('timeout', () => cb(new Error(`timeout broken: ${self.timeout}`)));
    process.nextTick(self.handler.bind(self.ctx), self.params, ctx, cb);
};
