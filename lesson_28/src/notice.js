import { createElm } from './utils';

export class Notice {
  constructor(title) {
    this.id = Date.now();
    this.title = title;
    this.HTMLElement = this.#getHTMLElement();
  }

  #getHTMLElement() {
    const div = createElm('div');
    const PADDING_PX = 8;

    div.style.width = '150px';
    div.style.height = '150px';
    div.style.border = '1px solid black';
    div.style.borderRadius = '14px';
    div.style.padding = `${PADDING_PX}px`;
    const h4 = createElm('h4');
    h4.textContent = this.title;
    h4.style.margin = '0 0 8px 0';
    const textArea = createElm('textarea');
    textArea.style.width = `calc(100% - ${PADDING_PX}px)`;
    div.append(h4, textArea);

    return div;
  }
}
