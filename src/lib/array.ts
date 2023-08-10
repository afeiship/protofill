// first
if (!Array.prototype.hasOwnProperty('first')) {
  Object.defineProperty(Array.prototype, 'first', {
    get: function () {
      return this[0];
    },
    set: function (value) {
      this[0] = value;
    },
  });
}

// last
if (!Array.prototype.hasOwnProperty('last')) {
  Object.defineProperty(Array.prototype, 'last', {
    get: function () {
      return this[this.length - 1];
    },
    set: function (value) {
      this[this.length - 1] = value;
    },
  });
}
