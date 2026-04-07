import type { User } from '@/types';
import { makeAutoObservable, runInAction } from 'mobx';

export class State {
  user?: User = undefined;

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  load(userId: string) {
    if (userId === this.user?.uuid) return;
    if (this.loading) return;
    this.loading = true;

    fetch(`http://localhost:8081/api/users/${userId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((responseData: User) => {
        runInAction(() => {
          this.user = responseData;
        });
      })
      .catch(() => {})
      .finally(() => {
        runInAction(() => {
          this.loading = false;
        });
      });
  }
}
