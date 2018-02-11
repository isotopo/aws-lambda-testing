
const assert = require('assert');

const proxyquire = require('proxyquire');

const stub = {
    'aws-sdk':{
        STS:class {
            assumeRole({ RoleArn, RoleSessionName, DurationSeconds }) {
                assert(RoleArn === 'test');
                assert(DurationSeconds === 300);
                assert(RoleSessionName === 'AWS_LAMBDA_TESTING');
                return {
                    promise:() => Promise.resolve({
                        AccessKeyId:'AccessKeyId',
                        SecretAccessKey:'SecretAccessKey',
                        SessionToken:'SessionToken'
                    })
                };
            }
        }
    }
};
const AwsTest = proxyquire('../index', stub);


describe('test  to assumeRole', () => {
    it('should set the environment vars', async() => {
        await AwsTest.assumeRole('test');
        assert(process.env.AWS_ACCESS_KEY_ID === 'AccessKeyId');
        assert(process.env.AWS_SECRET_ACCESS_KEY === 'SecretAccessKey');
        assert(process.env.AWS_SESSION_TOKEN === 'SessionToken');
    });
});
