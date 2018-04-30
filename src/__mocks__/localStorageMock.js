export default class LocalStorage {
  constructor() {
    this.store = {};
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  getItem(key) {
    return this.store[key] || null;
  }

  removeItem(key) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}

// global.localStorage = new LocalStorage();
