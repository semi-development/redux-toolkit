import {createSlice} from '@reduxjs/toolkit';

const arrSample = createSlice({
  name: 'pushingArr',
  initialState: {
    arr: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
    origin: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
  },
  reducers: {
    remove: (state, action) => {
      state.arr = action.payload;
    },
    replace: (state, action) => {
      state.arr = action.payload;
    },
    originArr: state => {
      state.arr = state.origin;
    },
  },
});

export const {remove, replace, originArr} = arrSample.actions;

export default arrSample.reducer;
