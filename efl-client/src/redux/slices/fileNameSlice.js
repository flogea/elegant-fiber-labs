import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  file1: '',
  file2: '',
  file3: '',
  file4: '',
  file5: '',
  file6: '',
  file7: '',
  file8: '',
  file9: '',
  file10: '',
  file11: '',
  file12: '',
  file13: '',
  file1_1: '',
  file2_1: '',
  file3_1: '',
  file4_1: '',
};

const fileNameSlice = createSlice({
  name: 'fileNames',
  initialState,
  reducers: {
    setFileName(state, action) {
      const { name, value } = action.payload;
      console.log(action.payload);
      state[name] = value;
    },
  },
});

export const { setFileName } = fileNameSlice.actions;

export default fileNameSlice.reducer;
