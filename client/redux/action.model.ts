import { ForkEffect, takeLatest } from 'redux-saga/effects';
import { Dependencies } from './model';

type Action<Z> = {
  type: Z;
};

type ActionPayload<Z, T> = Action<Z> & {
  payload: T;
}

const takeLatestAction = <T extends string>(
  type: T,
  worker: (deps: any, action: Action<T>) => unknown,
  deps?: any,
): ForkEffect<unknown> => takeLatest(type, worker, deps);

export type { Action, ActionPayload };

export { takeLatestAction };
