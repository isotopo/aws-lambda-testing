'use strict'
/**
* @class This class generate a instance to test the aws lambda handler
* @param {function} This function is handler
*/
class awsTest {
  constructor (handler, params, cb, ctx) {
    this.ctx = {}
    this.params = {}
    handler && (this.handler = handler)
    cb && (this._cb = cb)
    ctx && (this.ctx = ctx)
    params && (this.params = params)
    this.cbCalled = false
  }
  call (params, callback) {
    if(typeof this.handler !== 'function') return Promise.resolve()
    if (typeof params === 'function' && !callback) {
      callback = params
      params = undefined
    }
    (typeof callback === 'function') && (this._cb = callback)
    params && (this.params = params)
    let self = this
    let promise = new Promise(function (resolve, reject) {
      let done = function (error, data) {
        if (!self.cbCalled) return self.cb(resolve, reject, error, data)
        else if (error) return reject(error)
        resolve(data)
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
    this.cbCalled = false
    return promise
  }
  addHandler (handler) {
    if(typeof this.handler === 'function') this.handler = handler
    return this
  }
  addParams (params) {
    this.params = params
    return this
  }
  addCallback (cb) {
    this._cb = cb
    return this
  }
  addCtx (ctx) {
    this.ctx = ctx
    return this
  }
  cb (resolve, reject, error, data) {
      try {
          this.cbCalled = true
          if (this._cb) {
            return resolve(this._cb.apply(this.ctx, [error, data]))
          } else if (error) {
            return reject(error)
          }
          resolve(data)
      } catch (err) {
          reject(err)
      }

  }
}
module.exports = awsTest
