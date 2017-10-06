module.exports = (self, getRemainingTimeInMillis) => new Promise((resolve, reject) => {
    const cb = (error, data) => {
        console.log('error, data in promise =  ', error, data);
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
        console.log(' self.handler ', self.handler, self.ctx, self.params, ctx, cb);
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        console.log('e in promise = ', e);
        reject(e);
    }
});
