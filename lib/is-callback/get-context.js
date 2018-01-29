const defaultError = new Error('Fail called without error');
module.exports = (self, done) => ({
    done,
    succeed: (data) => done(null, data),
    fail: (error) => done(error || defaultError, null),
    getRemainingTimeInMillis: self.getRemainingTimeInMillis.bind(self),
});
