import { createElm } from './utils';

export class Renderer {
  #target;
  constructor() {
    this.#target = createElm('div');
    document.body.append(this.#target);
  }

  addOne(elem) {
    this.#target.append(elem);
  }
}
