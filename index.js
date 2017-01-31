'use strict'
/**
* @class This class generate a instance to test the aws lambda handler
* @param {function} This function is handler
*/
class awsTest {
  constructor (handler, params, cb, ctx) {
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
    return new Promise(function (resolve, reject) {
      let done = function (error, data) {
        self.cb(resolve, reject, error, data)
      }
      let ctx = {
        done: done,
        success: function (data) {
          done(null, data)
        },
        fail: function (error) {
          done(error, null)
        }
      }
      let cb = function (error, data) {
        self.cb(resolve, reject, error, data)
      }
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
  cb (resolve, reject, error, data) {
    try {
      this.handler.called = true
      if (this._cb) this._cb.call(this.ctx, error, data)
      if(error) return reject(error)
      resolve(data)
    } catch (err) {
      reject(err)
    }
  }
}
module.exports = awsTest
