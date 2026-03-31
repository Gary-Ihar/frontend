import type { User } from '@/types';
import { runInAction, makeAutoObservable } from 'mobx';

class UsersState {
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

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((responseData: User[]) => {
        runInAction(() => {
          this.usersList = responseData;
        });
      })
      .catch(() => {})
      .finally(() => {
        runInAction(() => {
          this.loadingList = false;
        });
      });
  }

  loadOne(userId: number) {
    if (userId === this.user?.id) return;
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

export const userState = new UsersState();
