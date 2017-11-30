const eventEmmiter = require('events');

module.exports = class extends eventEmmiter {
    constructor() {
        super();
    }
    getMemoryUsage() {
        return this._memoryUsage - this._memoryUsageInit;
    }

    setMemoryUsageLimit(limit) {
        this._memoryUsageLimit = limit || Infinity;
        return this;
    }

    getMemoryUsageLimit() {
        return this._memoryUsageLimit;
    }

    memoryUsageIsOverLimit() {
        return this.getMemoryUsage() > this._memoryUsageLimit;
    }
};
