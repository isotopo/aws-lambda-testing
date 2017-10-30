# aws-lambda-testing
Module to test the aws-lambda functions

[![Build Status](https://travis-ci.org/Cereceres/aws-lambda-testing.svg?branch=master)](https://travis-ci.org/Cereceres/aws-lambda-testing)

[![Inline docs](http://inch-ci.org/github/Cereceres/aws-lambda-testing.svg?branch=master)](http://inch-ci.org/github/Cereceres/aws-lambda-testing)


aws-lambda-testing for JavaScript

# Installing

```bash
$ npm install aws-lambda-testing
```

# Getting starter

```js

let AwsTest = require( 'aws-lambda-testing' )
let awsTest = new AwsTest() // you can pass a handler.
let handler = function (params, ctx, cb) {
  //the handler receive the params, ctx and cb
  assert(params.test === 'test')
  ctx.done(null, 'test') // the ctx object has the method done, fail and success
}
awsTest.addHandler(handler)
.exec({test: 'test'},function (error, res) { // The exec function can receive the params and callback
  // to use in the hadler to test
  assert(!error)
  assert(res === 'test')
})

awsTest.addHandler(handler)
.exec({test: 'testing the promise'}) // if you do not pass a callback return a promise
.then(function (res) {
  assert(res === 'testing the promise')
})
.catch(errorHandler) // every error is catched and the promise is rejected
})
```
### `Class aws-lambda-testing`
#### `aws-lambda-testing([handler, params, cb, ctx])`
To instance the aws-lambda-testing you can pass the handler to test, the params and execback to be
used when the handler is execed and the context to be used to exec it.

### `Instance aws-lambda-testing`
#### `aws-lambda-testing.exec([params,execback]) => self || promise`
This method exec the handler and return a promise, this promise is resolve with the return valur of execback passed to this
function and rejected with every error catched or values passed to ctx.fail or ctx.done. If you do not pass a callback return a promise.
#### `aws-lambda-testing.addHandler(handler) => self`
This method added the handler to be tested and return itself instance.
#### `aws-lambda-testing.addParams(params) => self`
This method added the params to be passed to the handler and return itself instance.
#### `aws-lambda-testing.addcallback(callback) => self`
This method added the execback to be passed to the handler and return itself instance.
#### `aws-lambda-testing.addCtx(ctx) => self`
This method added the context to be passed like thisArg to the handler and return itself instance.

#### `aws-lambda-testing.setTimeout(timeout)`
This method added the timeout, if the timeout in exec is broken a error is throw and passed to execback or promise if is not managed.

#### `Ctx object`
The ctx object has the method done, success and fail. If the error or error like
passed to done or fail method is not controlled by the execback is passed to reject method.
# Testing

Running the tests

```bash
npm test
```


## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.  For any bugs report please contact to me via e-mail: jesus.edelcereceres@gmail.com.

## Licence
The MIT License (MIT)

Copyright (c) 2015 JECD .

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
