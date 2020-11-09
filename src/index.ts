export {};

declare global {
  interface Array<T> {
    readonly first: T | undefined;
    readonly last: T | undefined;
  }
}

Object.defineProperty(Array.prototype, 'first', {
  get(this: Array<any>) {
    if (this.length > 0) return this[0];
    else return undefined;
  },
  configurable: true
});

Object.defineProperty(Array.prototype, 'last', {
  get(this: Array<any>) {
    if (this.length > 0) return this[this.length - 1];
    else return undefined;
  }
});
