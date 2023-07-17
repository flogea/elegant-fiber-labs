import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Components: [],
};

const ConstructorArraySlice = createSlice({
  name: 'ConstructorArray',
  initialState,
  reducers: {
    setComponents(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setComponents } = ConstructorArraySlice.actions;

export default ConstructorArraySlice.reducer;
