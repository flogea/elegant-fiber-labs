import { configureStore } from '@reduxjs/toolkit';
import fileNameSlice from './slices/fileNameSlice';

export const store = configureStore({
  reducer: {
    fileNameSlice,
  },
});
