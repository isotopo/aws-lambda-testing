module.exports = (self, getRemainingTimeInMillis) => new Promise((resolve, reject) => {
    const cb = (error, data) => {
        if (error) return reject(error);
        resolve(data);
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
        reject(e);
    }
});
