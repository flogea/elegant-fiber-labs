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
  file14: '',
  file15: '',
  file16: '',
  file17: '',
  file18: '',
  file19: '',
  file20: '',
  file21: '',
  file_1: '',
  file_2: '',
  file_3: '',
  file_4: '',
};

const fileNameSlice = createSlice({
  name: 'fileNames',
  initialState,
  reducers: {
    setFileName(state, action) {
      for (const key in action.payload) {
        if (Object.hasOwnProperty.call(action.payload, key)) {
          const element = action.payload[key];
          state[key] = element;
        }
      }
    },
  },
});

export const { setFileName } = fileNameSlice.actions;

export default fileNameSlice.reducer;
