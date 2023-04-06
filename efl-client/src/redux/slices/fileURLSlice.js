import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  file1URL: '',
  file2URL: '',
  file3URL: '',
  file4URL: '',
  file5URL: '',
  file6URL: '',
  file7URL: '',
  file8URL: '',
  file9URL: '',
  file10URL: '',
  file11URL: '',
  file12URL: '',
  file13URL: '',
  file1_1URL: '',
  file2_1URL: '',
  file3_1URL: '',
  file4_1URL: '',
};

const fileURLSlice = createSlice({
  name: 'fileURLs',
  initialState,
  reducers: {
    setFileURL(state, action) {
      for (const key in action.payload) {
        if (Object.hasOwnProperty.call(action.payload, key)) {
          const element = action.payload[key];
          state[key] = element;
        }
      }
    },
  },
});

export const { setFileURL } = fileURLSlice.actions;

export default fileURLSlice.reducer;
