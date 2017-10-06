module.exports = (self, getRemainingTimeInMillis) => {
    const cb = (error, data) => {
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
        getRemainingTimeInMillis: getRemainingTimeInMillis,
    };
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        throw e;
    }
};
