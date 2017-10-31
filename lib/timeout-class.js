const Core = require('./core-class');

module.exports = class extends Core {
    constructor() {
        super();
    }
    _setTimeOutEvent() {
        this._timerTimeOut = setTimeout(() => this.emit('timeout'), this.timeout);
        return this;
    }


    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }
};
