module.exports = (self, done) => ({
    done,
    succeed: (data) => done(null, data),
    fail: (error) => done(error, null),
    getRemainingTimeInMillis: self.getRemainingTimeInMillis,
})
;
