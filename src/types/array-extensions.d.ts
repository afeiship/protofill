declare global {
  interface Array<T> {
    first: T;
    last: T;
    filter2tuple: (predicate: Filter2TupleFn) => Filter2TupleResult;
  }
}

export {};
