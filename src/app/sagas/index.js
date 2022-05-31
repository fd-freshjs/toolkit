import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import counterSaga from './counter.saga';

export const sagaMW = createSagaMiddleware();

export function* rootSaga() {
    yield all([
        counterSaga(),
    ]);
}
