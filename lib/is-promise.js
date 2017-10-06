module.exports = (self, getRemainingTimeInMillis) => new Promise((resolve, reject) => {
    const cb = (error, data) => {
        console.log('error, data =  ', error, data);
        if (!self._cb) return;
        const _data = data;
        try {
            _data = self._cb.call(self.ctx, error, data);
        } catch (err) {
            return reject(err);
        }
        console.log('error and _cb', error);
        if (error && !self._cb) return reject(error);
        console.log('_data = ', _data);
        return resolve(_data);
    };
    const done = cb;
    const ctx = {
        done: done,
        succeed: function(data) {
            done(null, data);
        },
        fail: function(error) {
            done(error, null);
        },
        getRemainingTimeInMillis: getRemainingTimeInMillis,
    };
    try {
        self.handler.call(self.ctx, self.params, ctx, cb);
    } catch (e) {
        console.log('e in promise = ', e);
        reject(e);
    }
});
