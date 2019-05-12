import { IDictionary } from './interfaces/IDictionary';

class Dictionary<T> implements IDictionary<T> {
  private items: { [key: string]: T } = {};
  public add(key: string, value: T): void {
    this.items[key] = value;
  }
  public remove(key: string): T {
    const value: T = this.items[key];
    delete this.items[key];
    return value;
  }
  public containsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }
  public keys(): string[] {
    return Object.keys(this.items);
  }
  public values(): T[] {
    return Object.values(this.items);
  }
}

export { Dictionary };
