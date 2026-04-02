import { makeAutoObservable } from 'mobx';

type Locale = 'en_GB' | 'ru_RU';
type Theme = 'light' | 'dark';

export class UIState {
  locale: Locale = 'en_GB';
  theme: Theme = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  changeLocale() {
    this.locale = this.locale === 'en_GB' ? 'ru_RU' : 'en_GB';
  }

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
