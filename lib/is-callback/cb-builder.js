const unitMemoryUsage = 1024*1024

module.exports = (self) => (error, data) => {
    self._memoryUsage = process.memoryUsage().heapUsed / unitMemoryUsage;
    clearTimeout(self._timerTimeOut);
    if (!self._cb) return;

    if (self.memoryUsageIsOverLimit()) return  self._cb.call(self.ctx,new Error('Memory usage is over limit'));

    self._cb.call(self.ctx, error, data);
};