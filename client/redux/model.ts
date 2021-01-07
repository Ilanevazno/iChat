import { SagaIterator } from 'redux-saga';

import { AuthState, AuthActions } from './Auth/model';

type AvailableStates = AuthState;

type AvailableActions = AuthActions;

type AvailableReducers = (state: AvailableStates, action: AvailableActions) => AvailableStates;

type AppState = {
  auth: AuthState;
};

type SharedReduxEntries = {
  reducers: Record<string, AvailableReducers>;
  sagas: Array<(deps: any) => SagaIterator>;
}[];

type Dependencies = {
  api: any;
};

export type { SharedReduxEntries, AvailableReducers, Dependencies, AppState };
