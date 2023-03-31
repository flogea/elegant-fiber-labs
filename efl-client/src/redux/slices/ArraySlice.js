import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someArray: [],
};

const ArraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    setArray(state, action) {
      state.someArray = action.payload;
    },
  },
});

export const { setArray } = ArraySlice.actions;

export default ArraySlice.reducer;
