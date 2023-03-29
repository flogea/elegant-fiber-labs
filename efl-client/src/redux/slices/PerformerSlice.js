import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  performers: '',
  group: '',
  email: '',
};

const PerformerSlice = createSlice({
  name: 'performers',
  initialState,
  reducers: {
    setPerformers(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setPerformers } = PerformerSlice.actions;

export default PerformerSlice.reducer;
