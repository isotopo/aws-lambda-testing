
const assert = require('assert');
const AwsTest = require('../index');
const awsTest = new AwsTest((params, ctx, cb) => {
    assert(ctx.getRemainingTimeInMillis() > 270000);
    assert(params.test === 'test');
    assert(typeof ctx.getRemainingTimeInMillis === 'function');
    assert(typeof ctx.done === 'function');
    assert(typeof ctx.fail === 'function');
    assert(typeof ctx.succeed === 'function');
    assert(typeof cb === 'function');
    ctx.done(null, 'test');
});
awsTest.setTimeout(300000);
const events = require('../lib/events');
let i = 0;
describe('test to awsTest', () => {
    describe('The test to aws-tester with callback', () => {
        it('should throw a error if handler is not a function', () => {
            try {
                awsTest.setHandler();
            } catch (err) {
                assert(err);
            }
        });

        it('should return a promise reject when the handler is not given', () => new AwsTest().exec().catch((err) => assert(err)));


        it('should exec the callback passed', (done) => {
            awsTest
                .exec({ test: 'test' }, (error, res) => {
                    assert(!error);
                    assert(res === 'test');
                    done();
                });
        });

        it('The test for the callback with cb', (done) => {
            awsTest
                .setHandler((params, ctx, cb) => {
                    assert(params.test === 'test');
                    cb(null, 'test');
                })
                .exec({ test: 'test' }, (error, res) => {
                    assert(!error);
                    assert(res === 'test');
                    done();
                });
        });

        it('The test for the callback with success', (done) => {
            awsTest
                .setHandler((params, ctx) => ctx.succeed('test'))
                .exec(null, (error, res) => {
                    assert(res);
                    done(error);
                });
        });

        it('The test for the callback with done', (done) => {
            awsTest
                .setHandler((params, ctx) => ctx.done(null, 'test'))
                .exec(null, (error, res) => {
                    assert(res);
                    done(error);
                });
        });

        it('The test for the callback with fail', (done) => {
            awsTest
                .setHandler((params, ctx) => ctx.fail('error'))
                .exec(null, (error, res) => {
                    assert(error);
                    assert(!res);
                    done();
                });
        });

        it('the error is catched by the promise', (done) => {
            awsTest
                .setHandler((params, ctx, callback) => {
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
                .setHandler((params, ctx, callback) => {
                    assert.equal(typeof ctx.getRemainingTimeInMillis, 'function');
                    callback(null, 'data');
                })
                .exec(null, (error, res) => {
                    ++i;
                    assert.equal(res, 'data');
                    done();
                });
        });

        it('the error is catched when fail is used', (done) => {
            awsTest
                .setHandler((params, ctx) => ctx.fail('error'))
                .exec(null, (err) => {
                    assert(err);
                    done();
                });
        });

        it('the error because timeout is catched', (done) => {
            awsTest
                .setTimeout(3000)
                .setHandler((params, ctx) => setTimeout(() => ctx.done(), 5000))
                .exec(null, (err) => {
                    assert(err.message === 'timeout broken: 3000');
                    done();
                });
        });
    });

    describe('The test to aws-tester with promise', () => {
        before(() => {
            awsTest._cb = null;
            awsTest.setHandler((params, ctx) => {
                assert(params.test === 'test');
                ctx.done(null, 'test');
            });
        });
        it('should throw a error if handler is not a function', () => {
            try {
                awsTest.setHandler();
            } catch (err) {
                assert(err);
            }
        });

        it('should return a promise reject when the handler is not given', () => new AwsTest()
            .exec()
            .catch((err) => {
                assert(err);
            })
        );


        it('should exec the callback passed', () => awsTest
            .exec({ test: 'test' })
            .then((res) => {
                assert(res === 'test');
            })
            .catch((err) => Promise.reject(err))
        );

        it('The test for the callback with cb', () => awsTest
            .setHandler((params, ctx, cb) => {
                assert(params.test === 'test');
                cb(null, 'test');
            })
            .exec({ test: 'test' })
            .then((res) => {
                assert(res === 'test');
            }));

        it('The test for the callback with success', () => awsTest
            .setHandler((params, ctx) => ctx.succeed('test'))
            .exec(null)
            .then((res) => {
                assert(res);
            }));

        it('The test for the callback with done', () => awsTest
            .setHandler((params, ctx) => ctx.done(null, 'test'))
            .exec(null)
            .then((res) => assert(res)));

        it('The test for the callback with fail', () => awsTest
            .setHandler((params, ctx) => ctx.fail('error'))
            .exec(null)
            .catch((error) => assert(error)));

        it('the error is catched by the promise', () => awsTest
            .setHandler((params, ctx, callback) => {
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
                .setHandler((params, ctx, callback) => {
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
            .setHandler((params, ctx) => ctx.fail('error'))
            .exec(null)
            .catch((err) => assert(err)));
        it('the error is catched when the timeout is broken', () => awsTest
            .setHandler((params, ctx) => setTimeout(() => ctx.fail(), 5000))
            .exec(null)
            .catch((err) => assert(err.message === 'timeout broken: 3000')));
    });

    describe('test to every event pre config', () => {
        it('should test the every event', async() => {
            for (const event in events) {
                const res = await awsTest
                    .setHandler((params, ctx) => ctx.done(null, params))
                    .exec(event);
                assert.deepStrictEqual(res, events[event]);
            }
        });
    });

    describe('test memory usage', () => {
        it('should return the memory usage', async() => {
            await awsTest.setHandler((params, ctx) => ctx.done(null, params))
                .exec({});
            assert(awsTest.getMemoryUsage() > 0);
        });

        it('should throw a erros if memory usage is over limit', async() => {
            awsTest.setMemoryUsageLimit(0.1);
            awsTest.setTimeout(10000);
            const { error } = await awsTest.setHandler((params, ctx) => {
                const data = [];
                for (let i = 0; i < 100000; i++) data.push(i);
                data.reverse();
                ctx.done();
            })
                .exec({})
                .catch((error) => ({ error }));
            assert(error.message === 'Memory usage is over limit');
        });
    });
});
