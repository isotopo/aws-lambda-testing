module.exports = (self, getRemainingTimeInMillis) => {
    const cb = (error, data) => {
        console.log('error and data in callback ', error, data);
        if (!self._cb) return;
        const _data = data;
        try {
            self._cb.call(self.ctx, error, data);
        } catch (err) {
            console.log('err in callback ', err, self._cb);
            throw err;
        }
    };
    const done = cb;
    const ctx = {
        done: done,
        succeed: function(data) {
            console.log('data in fail ==', data);
            done(null, data);
        },
        fail: function(error) {
            console.log('error in fail ==', error);
            done(error, null);
        },
        getRemainingTimeInMillis: getRemainingTimeInMillis,
    };
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        console.log('e in callback = ', e, self._cb);
        throw e;
    }
};
