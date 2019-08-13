'use strict';

// Simple in-memory object store
module.exports = function Cache() {
    this.data = {};

    this.get = key => {
        if (this.data.hasOwnProperty(key)) {
            return this.data[key];
        }
    };

    // Inserts a new object record at `key`, or shallow-merges
    // `value` with the existing `value` at key
    this.set = (key, value) => {
        if (this.data.hasOwnProperty(key)) {
            this.data[key] = Object.assign({}, this.data[key], value);
        } else {
            this.data[key] = value;
        }
    };

    this.clear = key => {
        if (this.data.hasOwnProperty(key)) {
            delete this.data[key];
        }
    };
};
