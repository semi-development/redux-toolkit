import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './CounterRed';
import jump from './JumpRed';
import arrSample from './ArraySample';

export const store = configureStore({
  reducer: {
    counterSlice,
    jump,
    arrSample,
  },
});
