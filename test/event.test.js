
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
const events = require('../lib/events');

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
