import { Action } from '../action.model';

type AuthState = {
  isAuthDone: boolean;
};

type CheckAuth = Action<'CHECK_AUTH'>;

type AuthActions = CheckAuth;

export type { AuthState, AuthActions };
