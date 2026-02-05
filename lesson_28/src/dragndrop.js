export class DragNDrop {
  addHTMLElem(elem, dragEnd) {
    this.#addDragNDropMethod(elem, dragEnd);
    this.#render(elem);
  }

  #render(elem) {
    // render - должен быть в классе
    // ответственным за рендер элементов
    document.body.append(elem);
  }

  #addDragNDropMethod(elem, dragEnd) {
    elem.addEventListener('mousedown', ({ clientX, clientY }) => {
      elem.style.zIndex = 1000;

      const elemCoords = elem.getBoundingClientRect();
      const offsetX = clientX - elemCoords.x;
      const offsetY = clientY - elemCoords.y;

      let top;
      let left;

      const handlemouseMove = (event) => {
        const { clientX, clientY } = event;
        top = clientY - offsetY;
        left = clientX - offsetX;
        elem.style.top = `${top}px`;
        elem.style.left = `${left}px`;
      };

      const clean = () => {
        elem.style.zIndex = 0;
        elem.removeEventListener('mousemove', handlemouseMove);
        elem.removeEventListener('mouseup', clean);
        elem.removeEventListener('mouseleave', clean);
        dragEnd(left, top);
      };

      elem.addEventListener('mouseleave', clean);
      elem.addEventListener('mousemove', handlemouseMove);
      elem.addEventListener('mouseup', clean);
    });
  }
}
