'use strict'
/**
* @class This class generate a instance to test the aws lambda handler
* @param {function} This function is handler
*/
class awsTest {
  constructor (handler, params, cb, ctx) {
    this.timeout = 1000
    this.ctx = ctx || {}
    this.params = params || {}
    this._cb = function () {}
    this.handler = handler || function () {}
    (typeof cb === 'function') && (this._cb = cb)
  }
  call (params, callback) {
    if(typeof this.handler !== 'function' || this.handler.called) return Promise.resolve()
    if (typeof params === 'function' && !callback) {
      callback = params
      params = undefined
    }
    (typeof callback === 'function') && this.addCallback(callback)
    this.params = params
    let self = this
    let called
    return new Promise(function (resolve, reject) {
      /**
      * @function
      * @param {object} - error
      * @param {object} - data
      */
      let cb = function (error, data) {
        self.handler.called = true
        // if there a callback to manage the result is exec and update the data
        if (self._cb) data = self._cb.call(self.ctx, error, data)
        // set called to true here
        called = true
        // if there a error and is not managed the promise is rejected
        if(error && !self._cb) return reject(error)
        // resolve the promise with data
        resolve(data)
      }
      let done = cb
      // build the ctx object
      let ctx = {
        // done function
        done: done,
        success: function (data) {
          done(null, data)
        },
        fail: function (error) {
          done(error, null)
        }
      }
      // timeout to reject the promise if timeout var is broken
      setTimeout(function () {
        if(called) return
        let error =  new Error('TimeOut of ' + self.timeout + 'is broken' )
        cb(error, null)
      }, self.timeout);
      // exec the handler
      try {
        self.handler.call(self.ctx, self.params, ctx, cb)
      } catch (e) {
        reject(e)
      }
    })
  }
  addHandler (handler) {
    if(typeof handler === 'function') this.handler = handler
    return this
  }
  addParams (params) {
    this.params = params
    return this
  }
  addCallback (cb) {
    if(typeof cb === 'function') this._cb = cb
    return this
  }
  addCtx (ctx) {
    this.ctx = ctx
    return this
  }
 setTimeout(timeout){
   this.timeout = timeout
 }
}
module.exports = awsTest
