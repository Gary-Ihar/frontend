import { useCallback, useEffect, useState } from 'react';
import type { BaseNotice } from './types';
import { Notice } from './components/notice';
import { NoticesStore } from './services/localStorage';
import { type Coords } from './components/notice/useDragndrop';

export function App() {
  const [notices, setNotices] = useState<BaseNotice[]>([]);
  // TODO: Рассказать про баgи при usememo
  const [syncNoticeStorage, setSyncNoticeStorage] =
    useState<NoticesStore | null>(null);

  const handleUpdatePosition = useCallback(
    (id: BaseNotice['id'], position: Coords) => {
      setNotices((prevNotices) =>
        prevNotices.map((ntc) => {
          if (ntc.id === id) {
            return {
              ...ntc,
              ...position,
            };
          }
          return ntc;
        }),
      );
    },
    [],
  );

  const handleAdd = () => {
    const title = prompt('Type name of notice title') || `Name_${Date.now()}`;
    setNotices((prevNotices) => [
      ...prevNotices,
      {
        content: '',
        id: Date.now().toString(),
        left: 20,
        top: 20,
        title,
      },
    ]);
  };

  const handleRemove = (inputId: BaseNotice['id']) => {
    setNotices((prevNotices) => prevNotices.filter(({ id }) => id !== inputId));
  };

  const handleBlur = (inputId: BaseNotice['id'], value: string) => {
    setNotices((prevNotices) =>
      prevNotices.map((ntc) => {
        if (ntc.id === inputId) {
          return {
            ...ntc,
            content: value,
          };
        }
        return ntc;
      }),
    );
  };

  useEffect(() => {
    syncNoticeStorage?.sync(notices);
  }, [notices, syncNoticeStorage]);

  useEffect(() => {
    const storage = new NoticesStore();
    storage.init();
    const storageNotices = storage.getNotices();
    setNotices(storageNotices);
    setSyncNoticeStorage(storage);
  }, []);

  return (
    <div>
      <button
        style={{
          padding: 4,
          cursor: 'pointer',
        }}
        onClick={handleAdd}
      >
        +
      </button>
      {notices.map((ntc) => (
        <Notice
          key={ntc.id}
          id={ntc.id}
          title={ntc.title}
          content={ntc.content}
          left={ntc.left}
          top={ntc.top}
          onCardRemove={handleRemove}
          onTextBlur={handleBlur}
          onDragEnd={handleUpdatePosition}
        />
      ))}
    </div>
  );
}
