module.exports = (self) => new Promise((resolve, reject) => {
    const cb = (error, data) => {
        clearTimeout(self._timerTimeOut);
        if (error) return reject(error);
        return resolve(data);
    };
    const done = cb;
    const ctx = {
        done: done,
        succeed: (data) => done(null, data),
        fail: (error) => done(error, null),
        getRemainingTimeInMillis: self.getRemainingTimeInMillis,
    };
    self.once('timeout', () => cb(new Error(`timeout broken: ${self.timeout}`)));
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        reject(e);
    }
});
