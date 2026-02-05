import { DragNDrop } from './dragndrop';
import { LocalStorage } from './localStorage';
import { Notice } from './notice';
import './style.css';

const dragDrop = new DragNDrop();
const localStorageService = new LocalStorage('noticeApp');

const btn = document.createElement('button');
btn.textContent = '+';
btn.style.padding = '4px';
btn.style.cursor = 'pointer';

function initDragnDrop(notice) {
  dragDrop.addHTMLElem(notice.HTMLElement, (left, top) => {
    notice.updatePosition(left, top);

    const oldData = localStorageService.get() ?? [];

    localStorageService.set(
      oldData.map((oldNotice) => {
        if (oldNotice.id === notice.id) {
          return notice;
        }
        return oldNotice;
      })
    );
  });
}

btn.addEventListener('click', () => {
  const title = prompt('Type name of notice title', `Name_${Date.now()}`);
  const notice = new Notice(title);

  const oldData = localStorageService.get() ?? [];
  oldData.push(notice);

  localStorageService.set(oldData);
  initDragnDrop(notice);
});

const noticeFromLC = localStorageService.get() ?? [];

noticeFromLC.forEach((lcNotice) => {
  const notice = new Notice(lcNotice.title, lcNotice.id, lcNotice.top, lcNotice.left, lcNotice.content);
  initDragnDrop(notice);
});

document.body.append(btn);
