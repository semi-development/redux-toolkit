import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './CounterRed';
import jump from './JumpRed';
import push from './ArrayPush';

export const store = configureStore({
  reducer: {
    counterSlice,
    jump,
    push,
  },
});
