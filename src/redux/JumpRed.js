import {createSlice} from '@reduxjs/toolkit';

const jump = createSlice({
  name: 'jumper',
  initialState: {
    value: 0,
  },
  reducers: {
    jumpBy100: state => {
      state.value += 100;
    },
    downBy100: state => {
      state.value -= 100;
    },
  },
});

export const {jumpBy100, downBy100} = jump.actions;

export default jump.reducer;
