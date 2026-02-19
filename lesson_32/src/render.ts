import { createElm } from './utils';

export class Renderer {
  #target;
  constructor() {
    this.#target = createElm('div');
    document.body.append(this.#target);
  }

  addOne(elem: HTMLElement) {
    this.#target.append(elem);
  }
}
