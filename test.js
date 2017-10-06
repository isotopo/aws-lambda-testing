
const assert = require('assert');
const AwsTest = require('./index');
const awsTest = new AwsTest((params, ctx) => {
    console.log('params ', params);
    assert(params.test === 'test');
    ctx.done(null, 'test');
});
let i = 0;

describe('test to awsTest', () => {
    describe('The test to aws-tester with callback', () => {
        it('should throw a error if handler is not a function', () => {
            try {
                awsTest.addHandler();
            } catch (err) {
                assert(err);
            }
        });

        it('should return a promise reject when the handler is not given', () => new AwsTest().exec().catch((err) => assert(err)));


        it('should exec the callback passed', (done) => {
            awsTest
                .exec({test: 'test'}, (error, res) => {
                    console.log('error, res = ', error, res);
                    assert(!error);
                    assert(res === 'test');
                    done();
                });
        });

        it('The test for the callback with cb', (done) => {
            awsTest
                .addHandler((params, ctx, cb) => {
                    assert(params.test === 'test');
                    cb(null, 'test');
                })
                .exec({test: 'test'}, (error, res) => {
                    assert(!error);
                    assert(res === 'test');
                    done();
                });
        });

        it('The test for the callback with success', (done) => {
            awsTest
                .addHandler((params, ctx) => ctx.succeed('test'))
                .exec(null, (error, res) => {
                    console.log('error, res ', error, res);
                    assert(res);
                    done(error);
                });
        });

        it('The test for the callback with done', (done) => {
            awsTest
                .addHandler((params, ctx) => ctx.done(null, 'test'))
                .exec(null, (error, res) => {
                    assert(res);
                    done(error);
                });
        });

        it('The test for the callback with fail', (done) => {
            awsTest
                .addHandler((params, ctx) => ctx.fail('error'))
                .exec(null, (error, res) => {
                    assert(error);
                    assert(!res);
                    done();
                });
        });

        it('the error is catched by the promise', (done) => {
            awsTest
                .addHandler((params, ctx, callback) => {
                    callback(null, 'data');
                })
                .exec(null, (error, res) => {
                    ++i;
                    assert(res === 'data');
                    done();
                });
        });

        it('shoudl call the getRemainingTimeInMillis function', (done) => {
            let i = 0;
            awsTest
                .addHandler((params, ctx, callback) => {
                    assert.equal(typeof ctx.getRemainingTimeInMillis, 'function');
                    callback(null, 'data');
                })
                .exec(null, (error, res) => {
                    ++i;
                    assert.equal(res, 'data');
                    done();
                });
        });
        it('the error is catched by the promise if is throw', (done) => {
            try {
                awsTest
                .addHandler((params, ctx, callback) => {
                    callback(null, 'data');
                })
                .exec(null, () => {
                    throw new Error('test of error');
                });
            } catch (error) {
                assert(error);
                done();
            }
        });

        it('the error is catched when fail is used', (done) => {
            awsTest
                .addHandler((params, ctx) => ctx.fail('error'))
                .exec(null, (err) => {
                    assert(err);
                    done();
                });
        });
    });

    describe('The test to aws-tester with promise', () => {
        before(() => {
            awsTest._cb = null;
            awsTest.addHandler((params, ctx) => {
                console.log('params ', params);
                assert(params.test === 'test');
                ctx.done(null, 'test');
            });
        });
        it('should throw a error if handler is not a function', () => {
            try {
                awsTest.addHandler();
            } catch (err) {
                assert(err);
            }
        });

        it('should return a promise reject when the handler is not given', () => new AwsTest()
            .exec()
            .catch((err) => {
                console.log('err ', err);
                assert(err);
            })
        );


        it('should exec the callback passed', () => awsTest
                .exec({test: 'test'})
                .then((res) => {
                    console.log('res rpomise = ', res);
                    assert(res === 'test');
                })
                .catch((err) => {
                    console.log('error in promie catched ', err);
                    return Promise.reject(err);
                })
        );

        it('The test for the callback with cb', () => awsTest
                .addHandler((params, ctx, cb) => {
                    assert(params.test === 'test');
                    cb(null, 'test');
                })
                .exec({test: 'test'})
                .then((res) => {
                    assert(res === 'test');
                }));

        it('The test for the callback with success', () => awsTest
                .addHandler((params, ctx) => ctx.succeed('test'))
                .exec(null)
                .then((res) => {
                    assert(res);
                }));

        it('The test for the callback with done', () => awsTest
                .addHandler((params, ctx) => ctx.done(null, 'test'))
                .exec(null)
                .then((res) => assert(res)));

        it('The test for the callback with fail', () => awsTest
                .addHandler((params, ctx) => ctx.fail('error'))
                .exec(null)
                .catch((error) => assert(error)));

        it('the error is catched by the promise', () => awsTest
                .addHandler((params, ctx, callback) => {
                    callback(null, 'data');
                })
                .exec(null)
                .then((res) => {
                    ++i;
                    assert(res === 'data');
                }));

        it('shoudl call the getRemainingTimeInMillis function', () => {
            let i = 0;
            return awsTest
                .addHandler((params, ctx, callback) => {
                    assert.equal(typeof ctx.getRemainingTimeInMillis, 'function');
                    callback(null, 'data');
                })
                .exec(null)
                .then((res) => {
                    ++i;
                    assert.equal(res, 'data');
                });
        });

        it('the error is catched when fail is used', () => awsTest
                .addHandler((params, ctx) => ctx.fail('error'))
                .exec(null)
                .catch((err) => assert(err)));
    });
});

