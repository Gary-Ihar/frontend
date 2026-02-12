import { createElm } from './utils';

export class Notice {
  constructor(data, onRemove, onBlur) {
    const { title, id, top, left, content } = data;
    this.id = id ?? Date.now();
    this.title = title;
    this.top = top ?? 20;
    this.left = left ?? 20;
    this.content = content ?? '';
    this.HTMLElement = this.#getHTMLElement(onRemove, onBlur);
  }

  #getHTMLElement(onRemove, onBlur) {
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

    rmBtn.addEventListener(
      'click',
      () => {
        div.remove();
        onRemove?.(this.id);
      },
      {
        once: true,
      }
    );

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
    textArea.addEventListener('blur', () => onBlur(this));

    divTitle.append(h4, rmBtn);
    div.append(divTitle, textArea);

    return div;
  }
}

export class NoticesStore {
  #notices = {};
  #persistStorage;

  constructor(persistStorage) {
    this.#persistStorage = persistStorage;
  }

  #sync() {
    const newItems = this.getNotices();
    this.#persistStorage.set(newItems);
  }

  add(notice) {
    this.#notices[notice.id] = notice;
    this.#sync();
  }

  update(notice) {
    this.#notices[notice.id] = notice;
    this.#sync();
  }

  remove(id) {
    delete this.#notices[id];
    this.#sync();
  }

  getNotices() {
    return Object.values(this.#notices);
  }
}
