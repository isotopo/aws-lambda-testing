'use strict'
const assert = require('assert')
let AwsTest = require('./index')
let called
let awsTest = new AwsTest(function (params, ctx, cb) {
  assert(params.test === 'test')
  ctx.done(null, 'test')
})
let i = 0
describe('The test to aws-tester', function () {
  it('The test for the callback', function (done) {
    let called
    awsTest.call({test: 'test'}, function (error, res) {
      assert(!error)
      called = true
      assert(res === 'test')
    })
    .then(function (res) {
      if(called) done()
    })
    .catch(done)
  })

  it('The test for the callback with cb', function (done) {
    let called
    awsTest
    .addHandler(function (params, ctx, cb) {
      assert(params.test === 'test')
      cb(null, 'test')
    })
    .call({test: 'test'}, function (error, res) {
      assert(!error)
      called = true
      assert(res === 'test')
    })
    .then(function (res) {
      if(called) done()
    })
    .catch(done)
  })

  it('The test for the callback with success', function (done) {
    let called
    awsTest
    .addHandler(function (params, ctx, cb) {
      cb(null, 'test')
    })
    .call(function (error, res) {
      called = true
    })
    .then(function (res) {
      if(called) done()
    })
  })

  it('the error is catched by the promise', function (done) {
    awsTest
    .addHandler(function (params, ctx, callback) {
      callback(null, 'data')
    })
    .call(function (error, res) {
      ++i
      assert(res === 'data')
    }).then(function (res) {
      assert(i === 1)
      done()
    })
    .catch(done)
  })
  it('the error is catched by the promise if is throw', function (done) {
    awsTest
    .addHandler(function (params, ctx, callback) {
      callback(null, 'data')
    })
    .call(function () {
      throw new Error('test of error')
    })
    .catch(function (error) {
      assert(error.message === 'test of error')
      done()
    })
  })

  it('the error is catched when fail is used', function (done) {
    let called = false
    awsTest
    .addHandler(function (params, ctx, callback) {
      ctx.fail('error')
    })
    .call(function (err) {
      called = true
      assert(err)
    })
    .catch((err) => {
      assert(err)
      if(called) done()
    });
  })
})
