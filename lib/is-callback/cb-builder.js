const unitMemoryUsage = 1024 * 1024;

module.exports = (self) => {
    const cb = (error, data) => {
        if (cb.called) return;

        cb.called = true;

        if (error) return self._cb.call(self.ctx, error, null);

        self._memoryUsage = process.memoryUsage().heapUsed / unitMemoryUsage;
        clearTimeout(self._timerTimeOut);

        if (self.memoryUsageIsOverLimit()) return self._cb.call(self.ctx, new Error('Memory usage is over limit'));

        self._cb.call(self.ctx, null, data);
    };
    return cb;
};
