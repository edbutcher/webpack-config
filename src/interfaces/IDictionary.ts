export interface IDictionary<T> {
  add(key: string, value: T): void;
  remove(key: string): T;
  containsKey(key: string): boolean;
  keys(): string[];
  values(): T[];
}
