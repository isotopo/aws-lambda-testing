const Core = require('./core-class');

const eventBrokenDefault = 'timeoutBroken';
const {
    EVENT_TIMEOUT: eventTimeOutBrokenName = eventBrokenDefault
} = process.env;
module.exports = class extends Core {
    constructor() {
        super();
    }
    _setTimeOutEvent() {
        this._timerTimeOut = setTimeout(() => this.emit(eventTimeOutBrokenName), this.timeout);
        return this;
    }


    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }
};
