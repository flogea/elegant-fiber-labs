import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fileName1: '',
  fileName2: '',
  fileName3: '',
  fileName4: '',
  fileName5: '',
  fileName6: '',
  fileName7: '',
  fileName8: '',
  fileName9: '',
  fileName10: '',
  fileName11: '',
  fileName12: '',
  fileName13: '',
};

const fileNameSlice = createSlice({
  name: 'fileNames',
  initialState,
  reducers: {
    setFileName(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setFileName } = fileNameSlice.actions;

export default fileNameSlice.reducer;
