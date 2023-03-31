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
      const { performers, group, email } = action.payload;
      state.performers = performers;
      state.group = group;
      state.email = email;
    },
  },
});

export const { setPerformers } = PerformerSlice.actions;

export default PerformerSlice.reducer;
