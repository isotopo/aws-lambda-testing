'use strict'
/**
* @class This class generate a instance to test the aws lambda handler
* @param {function} This function is handler
*/


class awsTest {
  constructor (handler, params, cb, ctx) {
    if(handler) this.addHandler(handler)
    this.ctx = ctx || {}
    this.params = params || {}
    typeof cb === 'function' && (this._cb = cb)
  }
  exec (params, callback) {
    if(typeof this.handler !== 'function') return Promise.reject(new Error('Handler is not s function: ', typeof this.handler))

    if(this.handler.called) return Promise.resolve()

    if (typeof params === 'function' && !callback) {
      callback = params
      params = undefined
    }

    if(typeof callback === 'function') this.addCallback(callback)
    this.params = params
    let self = this
    return new Promise(function (resolve, reject) {
      self.called = false
      /**
      * @function
      * @param {object} - error
      * @param {object} - data
      */
      let cb = function (error, data) {
        // set self.called to true here
        if(self.called) return
        self.called = true
        self.handler.called = true
        // if there a callback to manage the result is exec and update the data
        if (self._cb) {
          try {
            data = self._cb.call(self.ctx, error, data) 
          } catch (err) {
            return reject(err)
          }
        }
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
        succeed: function (data) {
          done(null, data)
        },
        fail: function (error) {
          done(error, null)
        }
      }
      // exec the handler
      try {
        self.handler.call(self.ctx, self.params, ctx, cb)
      } catch (e) {
        reject(e)
      }
    })
  }
  addHandler (handler) {
    if(typeof handler !== 'function' ) throw new Error('Handler should a functio you pass: ',typeof handler)
    this.handler = handler
    handler && (handler.called = false);
    return this
  }
  addParams (params) {
    this.params = params
    return this
  }
  addCallback (cb) {
    (typeof cb === 'function') && (this._cb = cb)
    return this
  }
  addCtx (ctx) {
    this.ctx = ctx
    return this
  }
}
module.exports = awsTest
