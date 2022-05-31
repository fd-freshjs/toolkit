import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { rootSaga, sagaMW } from './sagas';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefault) => {
    return getDefault().concat([sagaMW]);
  },
  devTools: true,
});

sagaMW.run(rootSaga);
