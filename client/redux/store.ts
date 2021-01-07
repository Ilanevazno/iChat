import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { reduxEntry as AuthReduxEntry } from './Auth';
import { SharedReduxEntries, AvailableReducers } from './model';

const bindMiddleware = (middleware: any) => applyMiddleware(...middleware);

const reduxEntries: SharedReduxEntries = [
  AuthReduxEntry,
];

const preparedReducers: Record<string, AvailableReducers> = reduxEntries
  .reduce((acc, module) => ({...acc, ...module.reducers}), {});

const rootReducer = combineReducers(preparedReducers);

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

const deps: any = {
  api: {},
};

reduxEntries.forEach((module) => {
  const { sagas } = module;

  sagas.forEach((saga) => sagaMiddleware.run(saga, deps));
});

export { store };
