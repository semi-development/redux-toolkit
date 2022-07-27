import {createSlice} from '@reduxjs/toolkit';

const push = createSlice({
  name: 'pushingArr',
  initialState: {
    arr: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
    origin: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
  },
  reducers: {
    pushArr: (state, action) => {
      state.arr = action.payload;
    },
    popArr: (state, action) => {
      state.arr = action.payload;
    },
    originArr: state => {
      state.arr = state.origin;
    },
  },
});

export const {pushArr, popArr, originArr} = push.actions;

export default push.reducer;
