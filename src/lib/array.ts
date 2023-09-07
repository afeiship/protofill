// import '../types/array-extensions.d.ts';
import filter2tuple from '@jswork/filter2tuple';
import type { Filter2TupleFn, Filter2TupleResult } from '@jswork/filter2tuple';

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

// filter2tuple
if (!Array.prototype.hasOwnProperty('filter2tuple')) {
  Object.defineProperty(Array.prototype, 'filter2tuple', {
    value: function (predicate: Filter2TupleFn): Filter2TupleResult {
      return filter2tuple(this, predicate);
    },
  });
}
