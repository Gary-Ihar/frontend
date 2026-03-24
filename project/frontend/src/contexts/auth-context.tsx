import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import type { AuthUser } from '@/types';
import { LSService } from '@/services/ls/local-storage';

type Context = {
  user: AuthUser | null;
  isLogged: boolean;
  login: (
    data: { login: string; pass: string },
    onSuccess: (user: AuthUser) => void,
  ) => void;
};

type APIResponse<T> = {
  data: T;
};

const userStorage = new LSService<AuthUser>('user');

export const AuthContext = createContext<Context | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(() => userStorage.get());

  const login = useCallback<Context['login']>((data, onSuccess) => {
    const { login, pass } = data;
    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      body: JSON.stringify({ login, pass: Number(pass) }),
    })
      .then((res) => res.json())
      .then((data: APIResponse<AuthUser>) => {
        setUser(data.data);
        userStorage.set(data.data);
        onSuccess(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const data = useMemo<Context>(
    () => ({ user, login, isLogged: !!user }),
    [login, user],
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export function useAuthContext(): Context | null {
  const context = useContext(AuthContext);
  return context;
}
