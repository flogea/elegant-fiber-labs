import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someArray: [],
  table1: [],
  table2: [],
  table3: [],
  table4: [],
};

const ArraySlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    setArray(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setArray } = ArraySlice.actions;

export default ArraySlice.reducer;
