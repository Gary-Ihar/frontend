import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { User } from '@/types';
import { useRequest } from '@/hooks/useRequest';

type Context = {
  user: User | null;
  loading: boolean;
  loadUser: (userId: number) => void;
};

export const UserContext = createContext<Context | null>(null);

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<Context['user']>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { data, load } = useRequest<User>();

  useEffect(() => {
    if (data) {
      setUser(data);
      setLoading(false);
    }
  }, [data, loading]);

  const loadUser = useCallback(
    (userId: number) => {
      if (userId === user?.id) return;
      if (loading) return;
      setLoading(true);

      load({
        method: 'GET',
        path: `https://jsonplaceholder.typicode.com/users/${userId}`,
      });
    },
    [load, loading, user?.id],
  );

  return (
    <UserContext.Provider value={{ user, loadUser, loading: loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): Context | null {
  const context = useContext(UserContext);
  return context;
}
