const unitMemoryUsage = 1024 * 1024;

module.exports = (self, reject, resolve) => {
    const cb = (error, data) => {
        if (cb.called) return;

        cb.called = true;
        if (error) return reject(error);
        clearTimeout(self._timerTimeOut);
        self._memoryUsage = process.memoryUsage().heapUsed / unitMemoryUsage;

        if (self.memoryUsageIsOverLimit()) return reject(new Error('Memory usage is over limit'));


        return resolve(data);
    };
    return cb;
};
