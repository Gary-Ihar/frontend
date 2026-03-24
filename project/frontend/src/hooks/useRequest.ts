import { useCallback, useRef, useState } from 'react';

type Options = {
  path: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
};

export const useRequest = <T>(opts: Options) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const canLoad = useRef(true);

  const { path, method } = opts;

  const load = useCallback(() => {
    if (canLoad.current === false) return;
    canLoad.current = false;
    setLoading(true);

    fetch(path, {
      method,
    })
      .then((res) => res.json())
      .then((responseData: T) => {
        setData(responseData);
      })
      .catch(() => {})
      .finally(() => {
        canLoad.current = true;
        setLoading(false);
      });
  }, [method, path]);

  return {
    data,
    loading,
    load,
  };
};
