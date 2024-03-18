class LocalStorageUtil {
  /**
   * Sets a value in localStorage.
   * @param key The key under which to store the value.
   * @param value The value to store; it will be stringified. The type of `value` is generic.
   */
  static setItem<T>(key: string, value: T): void {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }

  /**
   * Retrieves a value from localStorage.
   * @param key The key of the value to retrieve.
   * @returns The parsed value if found and valid JSON, otherwise null.
   */
  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }

  /**
   * Clears a specific item from localStorage.
   * @param key The key of the item to clear.
   */
  static clearItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all items from localStorage.
   */
  static clearAll(): void {
    localStorage.clear();
  }
}

export default LocalStorageUtil;
