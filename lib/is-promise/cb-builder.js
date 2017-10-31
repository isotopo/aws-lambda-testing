const unitMemoryUsage = 1024*1024

module.exports = (self, reject, resolve) => (error, data) => {
    self._memoryUsage = process.memoryUsage().heapUsed / unitMemoryUsage    
    clearTimeout(self._timerTimeOut);

    if (self.memoryUsageIsOverLimit()) return reject(new Error('Memory usage is over limit'))

    if (error) return reject(error);
    return resolve(data);
};