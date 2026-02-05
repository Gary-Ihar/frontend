import { createElm } from './utils';

export class Notice {
  top = 20;
  left = 20;

  constructor(title, id, top, left, content) {
    this.id = id ?? Date.now();
    this.title = title;
    this.top = top;
    this.left = left;
    this.content = content ?? '';
    this.HTMLElement = this.#getHTMLElement();
  }

  #getHTMLElement({ onDeleteClick } = {}) {
    const div = createElm('div');
    const PADDING_PX = 8;

    div.style.width = '170px';
    div.style.height = '170px';
    div.style.border = '1px solid black';
    div.style.borderRadius = '14px';
    div.style.padding = `${PADDING_PX}px`;
    div.style.backgroundColor = '#fff';
    div.style.overflow = 'hidden';
    div.style.position = 'absolute';
    div.style.top = `${this.top}px`;
    div.style.left = `${this.left}px`;

    const divTitle = createElm('div');
    divTitle.style.display = 'flex';
    divTitle.style.alignItems = 'center';
    divTitle.style.marginBottom = '8px';

    const rmBtn = createElm('button');
    rmBtn.textContent = 'x';
    rmBtn.style.padding = '2px';
    rmBtn.style.cursor = 'pointer';

    rmBtn.addEventListener('click', () => {
      div.remove();
      onDeleteClick?.();
    });

    const h4 = createElm('h4');
    h4.textContent = this.title;
    h4.style.overflow = 'hidden';
    h4.style.textOverflow = 'ellipsis';
    h4.style.marginRight = '6px';

    const textArea = createElm('textarea');
    textArea.id = this.id;
    textArea.style.maxWidth = `100%`;
    textArea.textContent = this.content;
    textArea.addEventListener('input', ({ target: { value } }) => {
      this.content = value;
    });

    queueMicrotask(() => {
      const h4Height = h4.getBoundingClientRect().height;
      textArea.style.maxHeight = `calc(100% - ${h4Height + PADDING_PX}px)`;
    });

    textArea.addEventListener('mousedown', (e) => e.stopPropagation());

    divTitle.append(h4, rmBtn);
    div.append(divTitle, textArea);

    return div;
  }

  updatePosition(left, top) {
    this.top = top;
    this.left = left;
  }
}
