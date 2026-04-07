import { LSService } from '@/services/ls/local-storage';
import type { APIResponse, User } from '@/types';
import { makeAutoObservable, runInAction } from 'mobx';

export class AuthState {
  user?: User = undefined;

  lsStorage = new LSService<User>('user');
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
    onSuccess: (user: User) => void,
  ) {
    if (this.loading) return;
    this.loading = true;
    const { login, pass } = data;

    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      body: JSON.stringify({ login, pass: Number(pass) }),
    })
      .then((res) => res.json())
      .then((data: APIResponse<User>) => {
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
