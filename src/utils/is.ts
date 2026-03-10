export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== undefined;
}

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}
