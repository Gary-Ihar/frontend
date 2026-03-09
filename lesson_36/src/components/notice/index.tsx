import type { BaseNotice } from '@/types';
import { style } from './style';
import { useDragndrop, type Coords } from '@/components/notice/useDragndrop';

type Props = BaseNotice & {
  onCardRemove: (id: string) => void;
  onTextBlur: (id: string, value: string) => void;
  onDragEnd: (id: string, coords: Coords) => void;
};

export const Notice = (props: Props) => {
  const { id, title, content, left, top, onCardRemove, onTextBlur, onDragEnd } =
    props;

  const { setElement } = useDragndrop((coords) => onDragEnd(id, coords));

  return (
    <div style={{ ...style.card, top, left }} ref={setElement}>
      <div style={style.title}>
        <h4 style={style.h4}>{title}</h4>
        <button onClick={() => onCardRemove(id)}>X</button>
      </div>
      <textarea
        defaultValue={content}
        onMouseDown={(e) => e.stopPropagation()}
        onBlur={({ target: { value } }) => {
          onTextBlur(id, value);
        }}
        style={style.textarea}
      />
    </div>
  );
};
