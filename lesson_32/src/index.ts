import { applyDragNDrop } from './dragndrop';
import { LocalStorage } from './localStorage';
import { Notice, NoticesStore } from './notice';
import { Renderer } from './render';

function createAddButton(noticesStore: NoticesStore, renderer: Renderer) {
  const btn = document.createElement('button');
  btn.textContent = '+';
  btn.style.padding = '4px';
  btn.style.cursor = 'pointer';

  btn.addEventListener('click', () => {
    const title = prompt('Type name of notice title') || `Name_${Date.now()}`;
    const notice = new Notice(
      { title },
      (id) => noticesStore.remove(id),
      (notice) => noticesStore.update(notice)
    );

    applyDragNDrop(notice.HTMLElement, ({ left, top }) => noticesStore.update({ ...notice, left, top }));

    noticesStore.add(notice);
    renderer.addOne(notice.HTMLElement);
  });

  document.body.append(btn);
}

function initApp() {
  const localStorageService = new LocalStorage('noticeApp');
  const noticesStore = new NoticesStore(localStorageService);

  const renderer = new Renderer();

  createAddButton(noticesStore, renderer);

  localStorageService.get<Notice[]>()?.forEach((lcNotice) => {
    const notice = new Notice(
      lcNotice,
      (id) => noticesStore.remove(id),
      (notice) => noticesStore.update(notice)
    );
    applyDragNDrop(notice.HTMLElement, ({ left, top }) => noticesStore.update({ ...notice, left, top }));
    noticesStore.add(notice);
    renderer.addOne(notice.HTMLElement);
  });
}

initApp();
