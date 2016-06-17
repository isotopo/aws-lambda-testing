'use strict'
const assert = require('assert')
let AwsTest = require('./index')
let awsTest = new AwsTest(function (params, ctx, cb) {
  assert(params.test === 'test')
  ctx.done(null, 'test')
})
let i = 0
describe('The test to aws-tester', function () {
  it('The test for the callback', function (done) {
    awsTest.call({test: 'test'}, function (error, res) {
      assert(!error)
      assert(res === 'test')
      return 'testing the promise'
    })
    .then(function (res) {
      assert(res === 'testing the promise')
      done()
    })
    .catch(done)
  })

  it('the error is catched by the promise', function (done) {
    awsTest.addHandler(function (params, ctx, callback) {
      assert(params.test === 'test')
      callback('error', null)
      ctx.done('error', null)
    })
    .call(function (error, res) {
      ++i
      assert(error === 'error')
      assert(!res)
      return 'testing the promise2'
    }).then(function (res) {
      assert(i === 1)
      assert(res === 'testing the promise2')
      done()
    })
    .catch(done)
  })
  it('the error is catched by the promise if is throw', function (done) {
    awsTest
    .call(function () {
      throw new Error('test of error')
    }).then(done)
    .catch(function (error) {
      assert(error.message === 'test of error')
      done()
    })
  })
})
