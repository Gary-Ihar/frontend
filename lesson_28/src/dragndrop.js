export class DragNDrop {
  addHTMLElem(elem) {
    this.#addDragNDropMethod(elem);
    this.#render(elem);
  }

  #render(elem) {
    document.body.append(elem);
  }

  #addDragNDropMethod(elem) {
    elem.style.position = 'absolute';

    elem.addEventListener('mousedown', ({ clientX, clientY }) => {
      const elemCoords = elem.getBoundingClientRect();
      const offsetX = clientX - elemCoords.x;
      const offsetY = clientY - elemCoords.y;

      const handlemouseMove = (event) => {
        const { clientX, clientY } = event;

        elem.style.top = `${clientY - offsetY}px`;
        elem.style.left = `${clientX - offsetX}px`;
      };

      const handleMouseUp = () => {
        elem.removeEventListener('mousemove', handlemouseMove);
        elem.removeEventListener('mouseup', handleMouseUp);
      };

      elem.addEventListener('mousemove', handlemouseMove);
      elem.addEventListener('mouseup', handleMouseUp);
    });
  }
}
