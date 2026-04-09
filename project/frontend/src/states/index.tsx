import {
  createContext,
  useContext,
  type ReactNode,
  type JSX,
  useMemo,
  createElement,
} from 'react';
import { UsersState } from './users';
import { AuthState } from './auth';
import { UIState } from './ui';
import { observer } from 'mobx-react-lite';

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

function useAppState(): State {
  return useContext(StateContext);
}

type WithStateProps = {
  state: State;
};

export function withState<T>(
  Component: (p: WithStateProps & T) => JSX.Element,
) {
  const ObservedComponent = observer(Component);

  return function (props: T) {
    const state = useAppState();
    const componentProps: WithStateProps & T = { state, ...props };

    return createElement(ObservedComponent, componentProps);
  };
}

export function withLocalState<P, S extends object>(
  Component: (p: { state: S } & P) => JSX.Element,
  State: new () => S,
) {
  const ObservedComponent = observer(Component);

  return function (props: P) {
    const state = useMemo(() => new State(), []);

    const componentProps: { state: S } & P = { state, ...props };

    return createElement(ObservedComponent, componentProps);
  };
}
