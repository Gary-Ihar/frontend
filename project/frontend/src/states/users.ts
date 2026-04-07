import type { APIResponse, User } from '@/types';
import { runInAction, makeAutoObservable } from 'mobx';

export class UsersState {
  usersList: User[] = [];
  user?: User = undefined;

  loadingList = false;
  loadingOne = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadList() {
    if (this.loadingList) return;
    this.loadingList = true;

    fetch('http://localhost:8081/api/users', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(({ data }: APIResponse<User[]>) => {
        runInAction(() => {
          this.usersList = data;
        });
      })
      .catch(() => {})
      .finally(() => {
        runInAction(() => {
          this.loadingList = false;
        });
      });
  }

  loadOne(userId: string) {
    if (userId === this.user?.uiid) return;
    if (this.loadingOne) return;
    this.loadingOne = true;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
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
          this.loadingOne = false;
        });
      });
  }
}
