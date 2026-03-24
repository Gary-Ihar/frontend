import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { User } from '@/types';
import { useRequest } from '@/hooks/useRequest';
import { useLocation } from 'react-router';

type Context = {
  users: User[] | null;
};

export const UsersContext = createContext<Context | null>(null);

export function UsersProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<Context['users']>(null);
  const [wasLoaded, setWasLoaded] = useState<boolean>(false);
  const location = useLocation();

  const { data, load } = useRequest<User[]>({
    method: 'GET',
    path: 'https://jsonplaceholder.typicode.com/users',
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
      setWasLoaded(true);
    }
  }, [data]);

  useEffect(() => {
    if (location.pathname === '/users' && !wasLoaded) {
      load();
    }
  }, [load, location.pathname, wasLoaded]);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}

export function useUsersContext(): Context | null {
  const context = useContext(UsersContext);
  return context;
}
