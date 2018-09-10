
const assert = require('assert');
const AwsTest = require('../index');
const awsTest = new AwsTest((params, ctx, cb) => {
    assert(ctx.getRemainingTimeInMillis() > 27000);
    assert(params.test === 'test');
    assert(typeof ctx.getRemainingTimeInMillis === 'function');
    assert(typeof ctx.done === 'function');
    assert(typeof ctx.fail === 'function');
    assert(typeof ctx.succeed === 'function');
    assert(typeof cb === 'function');
    ctx.done(null, 'test');
});
awsTest.setTimeout(30000);
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
                assert(res === 'data');
                done();
            });
    });

    it('shoudl call the getRemainingTimeInMillis function', (done) => {
        awsTest
            .setHandler((params, ctx, callback) => {
                assert.equal(typeof ctx.getRemainingTimeInMillis, 'function');
                callback(null, 'data');
            })
            .exec(null, (error, res) => {
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
            .setTimeout(100)
            .setHandler((params, ctx) => setTimeout(() => ctx.done(), 200))
            .exec(null, (err) => {
                assert(err.message === 'timeout broken: 100');
                done();
            });
    });
});


