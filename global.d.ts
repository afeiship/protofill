declare global {
  interface Array<T> {
    first: T;
    last: T;
  }
}

export {};
