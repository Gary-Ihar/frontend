import { LSService } from '@/services/ls/local-storage';
import type { AuthUser } from '@/types';
import { makeAutoObservable, runInAction } from 'mobx';

type APIResponse<T> = {
  data: T;
};

export class AuthState {
  user?: AuthUser = undefined;

  lsStorage = new LSService<AuthUser>('user');
  loading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    const user = this.lsStorage.get();

    if (user) {
      this.user = user;
    }
  }

  get isLogged() {
    return !!this.user;
  }

  login(
    data: { login: string; pass: string },
    onSuccess: (user: AuthUser) => void,
  ) {
    if (this.loading) return;
    this.loading = true;
    const { login, pass } = data;

    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      body: JSON.stringify({ login, pass: Number(pass) }),
    })
      .then((res) => res.json())
      .then((data: APIResponse<AuthUser>) => {
        runInAction(() => {
          this.user = data.data;
          this.lsStorage.set(data.data);
          onSuccess(data.data);
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  logout() {
    this.user = undefined;
    this.lsStorage.clear();
  }
}
