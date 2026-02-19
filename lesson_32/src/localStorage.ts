export class LocalStorage {
  #key = '';
  constructor(key = 'noKey') {
    this.#key = key;
  }

  set(data: unknown) {
    try {
      localStorage.setItem(this.#key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }

  get<InputType>(): InputType | null {
    const result = localStorage.getItem(this.#key);
    if (result === null) return null;

    try {
      const res = JSON.parse(result) as InputType;
      return res;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
