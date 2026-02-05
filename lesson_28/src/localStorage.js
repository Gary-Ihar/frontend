export class LocalStorage {
  #key = '';
  constructor(key = 'noKey') {
    this.#key = key;
  }

  set(data) {
    localStorage.setItem(this.#key, JSON.stringify(data));
  }

  get() {
    const result = localStorage.getItem(this.#key);
    return JSON.parse(result);
  }
}
