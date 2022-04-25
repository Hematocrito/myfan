export interface AsyncContext<S> {
  state: S;
  setState: (newState: S) => void;
}
export interface StateProvider<T, Action> {
  state: T;
  dispath: (action: Action) => void;
}
