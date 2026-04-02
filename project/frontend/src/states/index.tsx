import { createContext, useContext, type ReactNode } from 'react';
import { UsersState } from './users';
import { AuthState } from './auth';
import { UIState } from './ui';

type Props = {
  children?: (state: State) => ReactNode;
};

class State {
  usersState: UsersState;
  authState: AuthState;
  uiState: UIState;

  constructor() {
    this.usersState = new UsersState();
    this.authState = new AuthState();
    this.uiState = new UIState();
  }
}

const state = new State();

const StateContext = createContext<State>(state);

export function StateProvider({ children }: Props) {
  return (
    <StateContext.Provider value={state}>
      {children?.(state)}
    </StateContext.Provider>
  );
}

export function useAppState(): State {
  return useContext(StateContext);
}
