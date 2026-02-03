import { DragNDrop } from './dragndrop';
import { Notice } from './notice';

const dragDrop = new DragNDrop();

const btn = document.createElement('button');
btn.textContent = '+';

btn.addEventListener('click', () => {
  const title = prompt('Type name of notice title', `Name_${Date.now()}`);
  const notice = new Notice(title);

  console.log(notice);

  dragDrop.addHTMLElem(notice.HTMLElement);
});

document.body.append(btn);
