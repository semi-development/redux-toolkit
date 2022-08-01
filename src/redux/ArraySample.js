import {createSlice} from '@reduxjs/toolkit';

const arrSample = createSlice({
  name: 'pushingArr',
  initialState: {
    arr: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
    origin: [1, 2, 4, 4, 5, 6, 4, 4, 3, 3],
  },
  reducers: {
    remove: state => {
      let remove4 = state.arr.filter(data => data != 4 && data);
      state.arr = remove4;
    },
    replace: state => {
      let replace4 = state.arr.map(data => (data == 4 ? 3 : data));
      state.arr = replace4;
    },
    originArr: state => {
      state.arr = state.origin;
    },
  },
});

export const {remove, replace, originArr} = arrSample.actions;

export default arrSample.reducer;
