import { Modal, type ModalProps } from 'antd';
import {
  useCallback,
  useImperativeHandle,
  useState,
  type ReactNode,
  type Ref,
} from 'react';

export type CustomModalActions<T> = {
  open: (data?: T) => void;
  close: () => void;
};

type Props<T> = {
  ref: Ref<CustomModalActions<T>>;
  children?: ReactNode | ((data?: T) => ReactNode);
} & Omit<ModalProps, 'children' | 'ref'>;

export const CustomModal = <T,>(props: Props<T>) => {
  const { ref, children, ...andtModalProps } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback((data?: T) => {
    setData(data ?? null);
    setOpen(true);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: handleOpen,
      close: handleClose,
    }),
    [handleOpen, handleClose],
  );

  return (
    <Modal {...andtModalProps} open={open} onCancel={handleClose}>
      {(() => {
        if (typeof children === 'function') {
          if (data) {
            return children(data);
          } else {
            return children();
          }
        } else {
          return children;
        }
      })()}
    </Modal>
  );
};
